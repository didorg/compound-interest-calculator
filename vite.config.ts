import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base for GitHub Pages project site deployment
  // If deploying to a user/org site (https://USERNAME.github.io/), change to '/'
  base: '/compound-interest-calculator/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
