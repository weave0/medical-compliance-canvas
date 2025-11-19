import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      // Allow reading markdown outside the project root
      allow: [
        path.resolve(__dirname, '..')
      ]
    }
  },
})
