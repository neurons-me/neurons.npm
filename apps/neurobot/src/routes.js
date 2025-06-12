// src/routes.js
import express from 'express';
import {
  redditGenerateAuthUrl,
  redditAuthCallback,
} from './reddit/redditAuth.js';
import { handleRedditAuth, handleFetchPosts, savePost } from './reddit/redditController.js';
const router = express.Router();

// Endpoint para obtener la URL de autenticación de Reddit
router.get('/reddit/auth-url', (req, res) => {
  const authUrl = redditGenerateAuthUrl();
  res.json({ authUrl });
});

// Endpoint para manejar la callback de autenticación
router.get('/reddit/callback', async (req, res) => {
  const { code, state } = req.query;
  try {
    const authData = await redditAuthCallback(code, state);
    res.json(authData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Ruta para manejar el callback de Reddit
router.get('/auth/callback', handleRedditAuth);
// Ruta para obtener publicaciones
router.post('/fetch-posts', handleFetchPosts);
// Ruta para guardar publicaciones
router.post('/save-post', savePost);
export default router;