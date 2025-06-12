import { redditAuthCallback } from './reddit/redditHandler.js';
import { fetchPostsForCategories, downloadMedia, combineVideoAndAudio } from './reddit/redditApi.js';
import { categories } from './reddit/config/categoriesConfig.js';
import fs from 'fs/promises';
import path from 'path';

// Handle the Reddit callback route
export const handleRedditAuth = async (req, res) => {
  const { code, state } = req.query;
  if (!code || !state) {
    return res.status(400).send('Missing code or state parameter!');
  }
  try {
    const { accessToken, userDetails } = await redditAuthCallback(code, state);
    const filteredDetails = {
      username: userDetails.name,
      karma: userDetails.total_karma,
      icon: userDetails.icon_img,
      verified: userDetails.verified,
    };
    req.session.userDetails = filteredDetails;
    req.session.accessToken = accessToken;
    res.redirect('/reddit-interface');
  } catch (error) {
    console.error('Error handling Reddit auth callback:', error.message);
    res.status(500).send('Error during Reddit authentication.');
  }
};

export const renderRedditInterface = (req, res) => {
  const userDetails = req.session.userDetails;
  const accessToken = req.session.accessToken;
  if (!userDetails || !accessToken) {
    return res.redirect('/');
  }
  res.render('redditInterface', {
    userDetails,
    categories,
    posts: {},
    error: null,
  });
};

// Handle the fetch posts route
export const handleFetchPosts = async (req, res) => {
  let { categories: selectedCategories, sortType, timeRange, limit } = req.body;
  if (!selectedCategories || selectedCategories.length === 0) {
    return res.render('redditInterface', {
      userDetails: req.userDetails || {},
      categories,
      posts: {},
      sortType,
      timeRange,
      limit,
      error: 'Please select at least one category to fetch posts.',
    });
  }
  if (!Array.isArray(selectedCategories)) {
    selectedCategories = [selectedCategories];
  }

  try {
    const fetchedPosts = await fetchPostsForCategories(selectedCategories, sortType, timeRange, limit);
    res.render('redditInterface', {
      userDetails: req.userDetails || {},
      categories,
      posts: fetchedPosts || {},
      sortType,
      timeRange,
      limit,
      error: null,
    });
  } catch (error) {
    console.error('Error fetching posts:', error.message);
    res.status(500).send('Failed to fetch posts.');
  }
};

const savedPostsFile = './savedPosts.json';
const mediaFolder = './media';
await fs.mkdir(path.join(mediaFolder, 'images'), { recursive: true });
await fs.mkdir(path.join(mediaFolder, 'videos'), { recursive: true });
let savedPosts = [];
try {
  const data = await fs.readFile(savedPostsFile, 'utf8');
  savedPosts = JSON.parse(data);
} catch {
  console.log('No existing saved posts file found, starting fresh.');
}
export const savePost = async (req, res) => {
  const post = req.body;
  if (!post || !post.id) {
    return res.status(400).send('Invalid post data.');
  }

  if (savedPosts.some((savedPost) => savedPost.id === post.id)) {
    return res.status(200).json({ message: 'Post already saved.', savedPosts });
  }

  if (post.image) {
    try {
      const imagePath = path.join(mediaFolder, 'images', `${post.id}.jpg`);
      await downloadMedia(post.image, imagePath);
      post.imagePath = imagePath;
    } catch (error) {
      console.error(`Failed to download image for post ${post.id}:`, error.message);
    }
  }

  if (post.video) {
    try {
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
    } catch (error) {
      console.error(`Failed to download or combine video for post ${post.id}:`, error.message);
    }
  }
  savedPosts.push(post);
  await fs.writeFile(savedPostsFile, JSON.stringify(savedPosts, null, 2));
  res.json({ message: 'Post saved successfully!', savedPosts });
};