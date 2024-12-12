import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'src': path.resolve(__dirname, './src'),
      '@styles': path.resolve(__dirname, './src/styles'),
      // other?
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "sass:color";
          @use "@styles/variables" as vars;
          @use "@styles/functions" as func;
          @use "@styles/mixins" as mix;
        `
      }
    }
  }
});
