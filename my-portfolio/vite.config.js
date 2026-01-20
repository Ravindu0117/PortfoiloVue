import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: '/',
  resolve: {
    alias: {
      // This tells Vite that @ starts at the /src folder
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});