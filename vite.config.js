import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig(({ command, mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  const isProduction = mode === 'production' || command === 'build'
  const base = isProduction ? process.env.VITE_BASE_URL : '/'

  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    base,
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
    build: {
      rollupOptions: {
        output: {
          // Group dependencies into separate chunks
          manualChunks: {
            vue: ['vue', 'vue-router', 'vue-i18n'],
            three: ['three'],
            vendor: ['axios', 'emailjs-com', 'vueperslides', 'vue3-google-autocomplete'],
          },
        },
      },
      chunkSizeWarningLimit: 600, // Increase limit to reduce warnings for large chunks
      assetsDir: 'assets', // Store static assets (JS, CSS, etc.) in a dedicated folder
      manifest: true, // Generates a manifest file to map hashed assets
      cssCodeSplit: true, // Split CSS into separate files for better caching
      sourcemap: false, // Disable sourcemaps in production for smaller build size
      minify: 'esbuild', // Use esbuild for faster builds
    },
    optimizeDeps: {
      // Prebundle dependencies for faster development builds
      include: ['axios', 'three', 'vue', 'vue-router', 'vue-i18n', 'vue3-google-autocomplete'],
      exclude: [], // If you have large dependencies you want to avoid prebundling, add them here
    },
  }
})
