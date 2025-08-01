import { defineConfig } from 'vite'
import { resolve } from 'path'
import { readFileSync } from 'fs'

// Specific configuration for Node.js-only code (CLI tools, Vite plugins)
export default defineConfig({
  build: {
    lib: {
      entry: {
        'images/plugins/index': resolve(__dirname, 'src/images/plugins/index.ts'),
      },
      formats: ['es'],
      fileName: (format, entryName) => `${entryName}.js`
    },
    rollupOptions: {
      external: [
        // Node.js built-ins
        'node:fs/promises',
        'node:fs',
        'node:path',
        'node:process',
        'node:url',
        'fs',
        'path',
        'process',
        'url',
        // Node.js packages
        'glob',
        'node-html-parser',
        'vite'
      ]
    },
    target: 'node18',
    assetsDir: 'assets',
    sourcemap: true,
    outDir: 'dist'
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})