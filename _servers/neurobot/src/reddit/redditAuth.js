/**
 * src/reddit/redditAuth.js
 * This module acts as a service layer for managing interactions with Reddit's API.
 * It encapsulates the core business logic related to Reddit functionalities, such as
 * generating authorization URLs, handling authentication callbacks, exchanging tokens,
 * and retrieving user details. By centralizing this logic, it ensures clean and modular code. */
import axios from 'axios';
import { redditConfig } from './config/redditConfig.js';
import { fetchUserDetails } from './redditApi.js';
// 📌 Variable en memoria para almacenar tokens temporalmente
let redditTokens = {}; // 🔥 Aquí se guardan los tokens mientras el servidor está en ejecución

// 🔹 Función para guardar tokens en memoria (luego se cambiará a this.me)
export const saveTokens = (tokens) => {
  redditTokens = tokens;
};

// 🔹 Función para cargar los tokens desde memoria
export const loadTokens = () => {
  return redditTokens;
};

// Generar la URL de autenticación de Reddit
export const redditGenerateAuthUrl = () => {
  const scopes = ['identity', 'read']; // Ensure these scopes are included
  const state = Math.random().toString(36).substring(2, 15); // 🔥 Generamos un estado dinámico para seguridad
  return `https://www.reddit.com/api/v1/authorize?client_id=${redditConfig.clientId}&response_type=code&state=${state}&redirect_uri=${encodeURIComponent(
    redditConfig.redirectUri
  )}&duration=permanent&scope=${scopes.join(' ')}`;
};

// Intercambiar el código de autorización por un token de acceso
export const exchangeCodeForToken = async (code) => {
  try {
    const response = await axios.post(
      'https://www.reddit.com/api/v1/access_token',
      new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: redditConfig.redirectUri,
      }),
      {
        auth: {
          username: redditConfig.clientId,
          password: redditConfig.clientSecret,
        },
        headers: {
          'User-Agent': redditConfig.userAgent,
        },
      }
    );

    const tokens = {
      accessToken: response.data.access_token,
      refreshToken: response.data.refresh_token,
      expiresIn: response.data.expires_in,
      obtainedAt: Date.now(),
    };

    // 🔥 Guardamos los tokens en memoria (esto se cambiará a this.me después)
    saveTokens(tokens);
    return tokens;
  } catch (error) {
    console.error('Error exchanging code for token:', error.response?.data || error.message);
    throw new Error('Failed to exchange code for token.');
  }
};

// Manejar el callback de autenticación de Reddit
export const redditAuthCallback = async (code, state) => {
  if (!state) {
    throw new Error('Invalid state parameter');
  }
  const { accessToken } = await exchangeCodeForToken(code);
  const userDetails = await fetchUserDetails(accessToken);
  return { accessToken, userDetails };
};