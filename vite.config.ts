import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: { port: 5173 },
  build: { sourcemap: true },
  resolve: {
    alias: {
      '@components': '/src/components',
      '@hooks': '/src/hooks',
      '@services': '/src/services',
      '@utils': '/src/utils',
      '@styles': '/src/styles',
      '@types': '/src/types',
      '@config': '/src/config',
      '@assets': '/src/assets',
      '@ui': '/src/components/ui',
      '@pages': '/src/components/pages',
    }
  }
});