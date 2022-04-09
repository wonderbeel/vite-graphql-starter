import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Unocss from 'unocss/vite'
import Vue from '@vitejs/plugin-vue'
import analyze from 'rollup-plugin-visualizer'
import gzipPlugin from 'rollup-plugin-gzip'
import path from 'path'
import presetIcons from '@unocss/preset-icons'
import { defineConfig } from 'vite'
import { presetAttributify, presetUno } from 'unocss'
import { brotliCompressSync } from 'zlib'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue({
      reactivityTransform: true,
    }),
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/core'],
      dts: true,
    }),
    Components({
      resolvers: [IconsResolver({ prefix: 'icon' })],
      dts: true,
    }),
    Icons(),
    Unocss({
      shortcuts: [],
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          scale: 1.2,
        }),
      ],
    }),
  ],
  server: {
    fs: {
      strict: true,
    },
  },
  build: {
    rollupOptions: {
      plugins: [
        // GZIP compression as .gz files
        gzipPlugin(),
        // Brotil compression as .br files
        gzipPlugin({
          customCompression: (c) => brotliCompressSync(Buffer.from(c)),
          fileName: '.br',
        }),
        analyze({
          filename: 'dist/report.html',
          gzipSize: true,
          brotliSize: true,
        }),
      ],
    },
  },
  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      '@vueuse/core',
    ],
  },
})
