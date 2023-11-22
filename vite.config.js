import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api':
      { 
        target: 'https://serviar-production.up.railway.app', // Cambia esto a la URL del servidor de Node.js del backend
        changeOrigin: true
      }
    },
  },
})
