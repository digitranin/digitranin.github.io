import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/digitranin.github.io/' // This should match your GitHub repo name
});
