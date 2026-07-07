import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' keeps asset URLs relative so the same build works on
// GitHub Pages (sub-path), Cloudflare Pages, and a custom domain root.
export default defineConfig({
  plugins: [react()],
  base: './',
})
