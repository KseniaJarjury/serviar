import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    server: {
      proxy: {
        '/api': 'https://serviar-production.up.railway.app',
      },
    },
  },
});
