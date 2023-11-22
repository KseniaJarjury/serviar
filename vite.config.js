import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     '/api': 'https://serviar-production.up.railway.app', // Cambia esto a la URL del servidor de Node.js del backend
  //   },
    
  // },
  // build: {
  //   rollupOptions: {
  //     input: 'src/index.jsx' // Aquí debes especificar tu punto de entrada
  //   },
  //   outDir: 'dist'
  // }
})
