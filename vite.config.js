import { defineConfig } from 'vite'
import viteCommonjs from 'vite-plugin-commonjs'
import vue from '@vitejs/plugin-vue'
import nodeResolve from '@rollup/plugin-node-resolve'

export default defineConfig({
  mode: 'development',
  root: './',
  plugins: [
    vue(),
    viteCommonjs()
  ],
  build: {
    lib: {
      entry: './src/index.vue',
      name: 'skt-slide-show',
      fileName: 'index',
      formats: ['umd'],
      emitAssets: true,
    },
    emptyOutDir: true,
    assetsInlineLimit: 0,
    target: ['chrome67'],
    minify: false,
    sourcemap: false,
    outDir: 'dist',
    rollupOptions: {
      external: ['vue'],
      plugins: [
        nodeResolve({
          extensions: ['.mjs', '.js', '.json', '.vue', '.ts']
        }),
      ],
      output: {
        globals: {
          vue: "__Vue__"
        },
      },
    }
  }
})