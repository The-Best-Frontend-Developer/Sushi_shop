import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path';
import { fileURLToPath} from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use '@styles/mixins' as *;`
      }
    }
  },
  resolve: {
    alias: {
      "@styles": resolve(__dirname, 'src/assets/mainStyles'),
    }
  }
})
