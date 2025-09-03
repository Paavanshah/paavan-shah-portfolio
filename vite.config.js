import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/paavan-shah-portfolio/', // This line is crucial for GitHub Pages
  plugins: [react()],
})