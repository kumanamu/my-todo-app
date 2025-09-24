import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server:{
    port: 3000,
    proxy: {
      // 프론트에서 /api 로 호출하면 -> http://localhost:8080/api 로 전달
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        // rewrite 없음: /api 경로 유지
        // rewrite: (path) => path.replace(/^\/api/, ''), 
        // <- 백엔드가 /api 없이 받는다면 이걸 사용
      },
    }
  }
})