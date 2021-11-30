import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import cssOption from './config/style';
import createVitePlugins from './config/plugins';
import proxy from './config/setupProxy';
import { VITE_APP_BASE, VITE_APP_OPEN, VITE_APP_PORT } from './config/index';

// https://vitejs.dev/config/
export default defineConfig({
  base: VITE_APP_BASE,
  plugins: [react(), ...createVitePlugins()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: cssOption,
  server: {
    host: true,
    port: VITE_APP_PORT,
    open: VITE_APP_OPEN,
    proxy,
  },
});
