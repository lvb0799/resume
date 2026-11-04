import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Repository: lvb0799/resume → https://lvb0799.github.io/resume/
export default defineConfig({
  plugins: [react()],
  base: '/resume/',
})
