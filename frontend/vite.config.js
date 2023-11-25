import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: 'src/index.jsx' // Aquí debes especificar tu punto de entrada
    }
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://serviar-production.up.railway.app',
  //   },
  // }

  }
})
