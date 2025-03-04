import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base: '/Sreenivasulu_Ramanaboina_portfolio2/', // Set the base path for GitHub Pages
  build: {
    rollupOptions: {
      input: './index.html', // Vite typically picks up the correct entry file automatically, so you can leave this out unless you have custom entry files
    },
  },
});
