import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: {
    target: 'esnext' // Ensures support for top-level await
  },
  build: {
    target: 'esnext', // Also ensure the final build supports modern JS
    outDir: 'dist',
    emptyOutDir: true
  }
});
