import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: '/alfedo-web-100/',
  plugins: [
    tailwindcss(),
  ],
})