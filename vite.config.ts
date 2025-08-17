import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    resolve: {
    alias: {
      '@': '/src',
    },
  },
  define: {
    '__BASE_URL__': JSON.stringify('https://dev.codeleap.co.uk/careers/'),
  }
})
