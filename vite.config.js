import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, 
    port: 5173,
    proxy: {
        // '/api': 'http://localhost:3000',
      '/api': 'https://parfly-backend.onrender.com',
    },
    // allowedHosts: ['tired-news-cry.loca.lt'],
  },
});

