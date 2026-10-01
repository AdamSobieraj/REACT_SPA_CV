import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  // dev: '/' (localhost) | build: './' (relatywne) — działa i na GitHub Pages
  // (…/REACT_SPA_CV/), i w Dockerze/nginx (root /). Bez śledzenia env / targetów.
  base: mode === 'production' ? './' : '/',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          motion: ['framer-motion'],
        },
      },
    },
  },
}));
