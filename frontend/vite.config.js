import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      // This proxies all requests starting with /api to your backend
      '/api': {
        target: 'http://localhost:5000', // or 3000, if your backend runs there
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
