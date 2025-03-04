import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base: './', // Ensures all asset paths are relative for GitHub Pages
  root: '.',  // Set the root directory to the current folder (i.e., the root of your project)
  build: {
    rollupOptions: {
      input: './index.html', // Explicitly specify the entry file path
    },
  },
});
