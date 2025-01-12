import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  build: {
    // Increase the chunk size warning limit
    chunkSizeWarningLimit: 1000, // You can adjust this if needed

    // Optional: Add manualChunks configuration for custom chunking
    rollupOptions: {
      output: {
        manualChunks: {
          // Example: Move libraries like 'react', 'react-dom', or others into separate chunks
          vendor: ['react', 'react-dom', 'lodash', 'axios'],
        },
      },
    },
  },
});
