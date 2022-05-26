import { defineConfig } from 'vite'
import { resolve } from 'path'
import { getThemeVariables } from 'antd/dist/theme'
import react from '@vitejs/plugin-react'
import { createStyleImportPlugin } from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // https://vitejs.dev/config/#server-proxy
    proxy: {
      '/api': {
        target: 'http://api.ding.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, 'src'),
    },
    extensions: ['.ts', '.tsx', '.json', '.js', '.jsx']
  },
  plugins: [
    react(),
    createStyleImportPlugin({
      libs: [
        // If you don’t have the resolve you need, you can write it directly in the lib, or you can provide us with PR
        {
          libraryName: 'antd',
          esModule: true,
          resolveStyle: (name) => {
            return `antd/es/${name}/style/index.js`;
          },
        },
      ],
    }),
  ],
  css: {
    // https://vitejs.dev/config/#css-preprocessoroptions
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          // 开启暗色主题
          ...getThemeVariables({
            dark: true,
            // compact: true
          }),
          "primary-color": "#1DA57A",
          "link-color": "#1DA57A",
          "border-radius-base": "2px",
        },
      },
    }
  },
})
