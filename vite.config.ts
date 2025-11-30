import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// Vercel serves from the domain root, while GitHub Pages uses the repo path.
const isVercel = process.env.VERCEL === '1';
const isProd = process.env.NODE_ENV === 'production';
const base = isVercel ? '/' : isProd ? '/02-react-cafe/' : '/';

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
  build: {
    sourcemap: true,
  },
});
