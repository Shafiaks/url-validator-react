import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/url-validator-react/",
  plugins: [react()],
  // server:{
  //  server: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://localhost:5173',
  //       changeOrigin: true,
  //     },
  //   },
  // },
  // },
})
