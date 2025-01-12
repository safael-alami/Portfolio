import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/Portfolio/', // Remplacez 'Portfolio' par le nom de votre repo GitHub
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  build: {
    // Augmenter la limite d'avertissement de taille des chunks
    chunkSizeWarningLimit: 1000, // Ajustez cette valeur si nécessaire

    // Optionnel : Ajouter une configuration de manualChunks pour un découpage personnalisé
    rollupOptions: {
      output: {
        manualChunks: {
          // Exemple : Placer des bibliothèques comme 'react', 'react-dom', ou d'autres dans des chunks séparés
          vendor: ['react', 'react-dom', 'lodash', 'axios'],
        },
      },
    },
  },
});
