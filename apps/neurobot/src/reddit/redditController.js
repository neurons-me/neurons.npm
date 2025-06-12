/**
 * Reddit Controller
 * Handles Express Routes.
 * This file contains all the controllers for handling Reddit-related operations.
 * Each function corresponds to a specific API route and interacts
 * with the redditAuth and redditApi modules.
 */

import { redditAuthCallback } from './redditAuth.js';
import { fetchPostsForCategories, downloadMedia, combineVideoAndAudio } from './redditApi.js';
import { categories } from './config/categoriesConfig.js';
import path from 'path';

/* ------------------------- Storage in Memory ------------------------- */
// 🔹 Ahora guardamos posts en memoria en lugar de archivos
let savedPosts = []; 

// 🔹 Carpeta base para almacenar media descargada
const mediaFolder = './media';

/* ------------------------- Handle Reddit Authentication Callback ------------------------- */
/**
 * Handles Reddit OAuth callback.
 * Exchanges code for access token and returns user details as JSON.
 */
export const handleRedditAuth = async (req, res) => {
  const { code, state } = req.query;
  if (!code || !state) {
    return res.status(400).json({ error: 'Missing code or state parameter!' });
  }
  try {
    const { accessToken, userDetails } = await redditAuthCallback(code, state);

    const filteredDetails = {
      username: userDetails.name,
      karma: userDetails.total_karma,
      icon: userDetails.icon_img,
      verified: userDetails.verified,
    };

    // 🔹 Enviamos los datos como JSON para que React los use
    res.json({ accessToken, userDetails: filteredDetails });
  } catch (error) {
    console.error('Error handling Reddit auth callback:', error.message);
    res.status(500).json({ error: 'Error during Reddit authentication.' });
  }
};

/* ------------------------- Fetch Posts from Reddit ------------------------- */
/**
 * Fetches posts from selected Reddit categories and returns them as JSON.
 */
export const handleFetchPosts = async (req, res) => {
  let { categories: selectedCategories, sortType, timeRange, limit } = req.body;

  if (!selectedCategories || selectedCategories.length === 0) {
    return res.status(400).json({ error: 'Please select at least one category to fetch posts.' });
  }
  
  if (!Array.isArray(selectedCategories)) {
    selectedCategories = [selectedCategories];
  }

  try {
    const fetchedPosts = await fetchPostsForCategories(selectedCategories, sortType, timeRange, limit);
    res.json({ posts: fetchedPosts });
  } catch (error) {
    console.error('Error fetching posts:', error.message);
    res.status(500).json({ error: 'Failed to fetch posts.' });
  }
};

/* ------------------------- Save Posts Locally ------------------------- */
/**
 * Saves a Reddit post in memory and downloads any associated media.
 */
export const savePost = async (req, res) => {
  const post = req.body;
  if (!post || !post.id) {
    return res.status(400).json({ error: 'Invalid post data.' });
  }

  if (savedPosts.some((savedPost) => savedPost.id === post.id)) {
    return res.json({ message: 'Post already saved.', savedPosts });
  }

  try {
    // 🔹 Descarga imagen si hay
    if (post.image) {
      const imagePath = path.join(mediaFolder, 'images', `${post.id}.jpg`);
      await downloadMedia(post.image, imagePath);
      post.imagePath = imagePath;
    }

    // 🔹 Descarga video y combina con audio si es necesario
    if (post.video) {
      const videoPath = path.join(mediaFolder, 'videos', `${post.id}_video.mp4`);
      const audioPath = path.join(mediaFolder, 'videos', `${post.id}_audio.mp4`);
      const outputPath = path.join(mediaFolder, 'videos', `${post.id}_combined.mp4`);

      await downloadMedia(post.video, videoPath);
      if (post.audio) {
        await downloadMedia(post.audio, audioPath);
        await combineVideoAndAudio(videoPath, audioPath, outputPath);
        post.videoPath = outputPath;
      } else {
        post.videoPath = videoPath;
      }
    }

    // 🔹 Guarda el post en memoria
    savedPosts.push(post);
    res.json({ message: 'Post saved successfully!', savedPosts });

  } catch (error) {
    console.error(`Error saving post ${post.id}:`, error.message);
    res.status(500).json({ error: 'Failed to save post.' });
  }
};