import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Setting base to './' ensures CSS and JS assets load without 404 errors on GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: './'
});
