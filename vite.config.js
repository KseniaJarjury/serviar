import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://serviar-production.up.railway.app', // Cambia esto a la URL del servidor de Node.js del backend
        changeOrigin: true,
        secure: false, // Ajusta a true para habilitar la verificación SSL en producción
        ws: true, // Habilita si tu backend utiliza WebSocket
      },
    },
  },
});
