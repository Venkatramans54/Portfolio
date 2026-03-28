import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/react-lottie-player") || id.includes("node_modules/lottie-web")) {
            return "lottie";
          }
          if (id.includes("node_modules/framer-motion")) {
            return "motion";
          }
          if (id.includes("node_modules/react-icons")) {
            return "icons";
          }
          if (id.includes("node_modules/react") || id.includes("node_modules/scheduler")) {
            return "react-vendor";
          }
        },
      },
    },
  },
})
