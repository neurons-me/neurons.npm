import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
//@.neurons.me
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8234, // Replace with your desired port number
  },
});