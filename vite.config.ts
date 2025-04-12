import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { existsSync, mkdirSync, copyFileSync } from 'fs'

export default defineConfig({
  plugins: [react(), {
    name: 'copy-files',
    closeBundle: () => {
      const distPath = resolve(__dirname, 'dist')
      if (!existsSync(distPath)) {
        mkdirSync(distPath)
      }
      // Copy manifest
      copyFileSync(
        resolve(__dirname, 'manifest.json'),
        resolve(distPath, 'manifest.json')
      )
      // Copy content script
      copyFileSync(
        resolve(__dirname, 'content.js'),
        resolve(distPath, 'assets/content.js')
      )
    }
  }],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
})
