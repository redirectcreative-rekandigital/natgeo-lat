import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' agar hasil build bisa diletakkan di folder mana pun di cPanel
export default defineConfig({
  base: './',
  plugins: [react()],
});
