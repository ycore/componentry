import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [],

  build: {
    lib: {
      entry: {
        'catalyst': resolve(__dirname, 'src/catalyst/index.ts'),
        'images': resolve(__dirname, 'src/images/index.ts'),
        'impetus': resolve(__dirname, 'src/impetus/index.ts'),
        'shadcn-ui': resolve(__dirname, 'src/shadcn-ui/index.ts'),
        'shadcn-ui/examples': resolve(__dirname, 'src/shadcn-ui/examples/index.tsx'),
        'shadcn-ui/types/lucide-sprites': resolve(__dirname, 'src/shadcn-ui/@types/lucide-sprites.ts')
      },
      formats: ['es'],
      fileName: (format, entryName) => `${entryName}.js`
    },
    rollupOptions: {
      external: [
        'clsx',
        'react',
        'react-router',
        '@headlessui/react',
        'class-variance-authority',
        'cmdk',
        'next-themes',
        'node-html-parser',
        'radix-ui',
        'sonner',
        'node:child_process',
        'node:fs',
        'node:path',
        'node:process',
        'node:url'
      ],
      output: {
        assetFileNames: "[name].[ext]"
      }
    },
    assetsDir: 'assets',
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    sourcemap: true,
    outDir: 'dist'
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})