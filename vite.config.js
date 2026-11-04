import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 使用相對路徑，適用於 GitHub Pages 專案子路徑或自訂網域。
export default defineConfig({
  plugins: [react()],
  base: './',
})
