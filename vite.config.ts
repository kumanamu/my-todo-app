import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias:{
      '@' : path.resolve(__dirname, 'src')



    }


  },
  server:{

    port: 3000,
    proxy : {
      //프론트에서 api로 호출하면 >https로컬호스트8080api
      '/api' : {
target : 'http://localhost:8080',
changeOrigin : true,

      }
    }
  }

})
