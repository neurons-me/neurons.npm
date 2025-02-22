// src/reddit/redditApi.js
import { loadTokens } from './redditAuth.js';
import axios from 'axios';
import fs from 'fs';
import { exec } from 'child_process';

/* ------------------------- Reddit API Functions ------------------------- */
export const fetchUserDetails = async (accessToken) => {
  try {
    const response = await axios.get('https://oauth.reddit.com/api/v1/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'User-Agent': 'neurobot',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data || error.message);
  }
};

export const fetchSubredditPosts = async (category, accessToken, sortType = 'hot', timeRange = 'day', limit = 10) => {
  try {
    const response = await axios.get(`https://oauth.reddit.com/r/${category}/${sortType}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'User-Agent': 'reddit-data-collector',
      },
      params: { t: timeRange, limit },
    });

    return response.data.data.children.map((post) => {
      const data = post.data;
      return {
        id: data.id,
        title: data.title,
        url: data.url,
        thumbnail: data.thumbnail?.startsWith('http') ? data.thumbnail : null,
        image: data.preview?.images?.[0]?.source?.url?.replace(/&amp;/g, '&') || null,
        video: data.media?.reddit_video?.fallback_url || null,
        audio: data.media?.reddit_video?.audio_url || null,
        selftext: data.selftext,
        score: data.score,
        num_comments: data.num_comments,
      };
    });
  } catch (error) {
    console.error(`Error fetching posts for category ${category}:`, error.response?.data || error.message);
    throw error;
  }
};

/* ------------------------- Media Handling Functions ------------------------- */
export const downloadMedia = async (url, filePath) => {
  try {
    const response = await axios.get(url, { responseType: 'stream' });
    const writer = fs.createWriteStream(filePath);

    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });
  } catch (error) {
    console.error(`Failed to download media from ${url}:`, error.message);
    throw error;
  }
};

export const combineVideoAndAudio = async (videoPath, audioPath, outputPath) => {
  return new Promise((resolve, reject) => {
    exec(
      `ffmpeg -i ${videoPath} -i ${audioPath} -c:v copy -c:a aac ${outputPath}`,
      (error, stdout, stderr) => {
        if (error) {
          console.error(`Error combining video and audio: ${error.message}`);
          reject(error);
        } else {
          console.log(`Video with audio saved to ${outputPath}`);
          resolve(outputPath);
        }
      }
    );
  });
};

/* ------------------------- Fetch Posts by Category ------------------------- */
export const fetchPostsForCategories = async (selectedCategories, sortType = 'hot', timeRange = 'day', limit = 10) => {  const tokens = await loadTokens();
  if (!tokens) {
    throw new Error('No tokens found. Please authorize the app first.');
  }

  const fetchedPosts = {};
  for (const category of selectedCategories) {
    try {
      const posts = await fetchSubredditPosts(category, tokens.accessToken, sortType, timeRange, limit);
      fetchedPosts[category] = posts;
      console.log(`Fetched ${posts.length} posts from r/${category}`);
    } catch (error) {
      console.error(`Error fetching posts for category ${category}:`, error.message);
    }
  }

  return fetchedPosts;
};