import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // If your assets are in a different directory:
      "assets": "/src/assets",
      "json": "/src/json",
      "components": "/src/components",
      "Rodape": "/src/components/Rodape",
      "paginas": "/src/paginas"
    },
  },
})
