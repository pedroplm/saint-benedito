import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: "/saint-benedito/",
  build: {
    crossorigin: false,
  },
  plugins: [react(), tailwindcss()],
})
