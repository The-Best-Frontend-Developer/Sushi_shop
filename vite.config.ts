import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path';
import { fileURLToPath} from 'url';
import svgr from "vite-plugin-svgr";

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  plugins: [react(), svgr()],
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
