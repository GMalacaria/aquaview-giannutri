import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,        // describe, it, expect senza import
    environment: 'jsdom', // 'node' se fai test lato server
  },
})
