import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig, type Plugin } from 'vitest/config';

/** Next.js turns image imports into { src, width, height }; mimic that so components render in tests. */
function nextStaticImages(): Plugin {
  return {
    name: 'next-static-images',
    enforce: 'pre',
    load(id) {
      const file = id.split('?')[0];
      if (/\.(png|jpe?g|gif|webp|avif)$/i.test(file)) {
        return `export default { src: ${JSON.stringify('/images/' + path.basename(file))}, width: 1280, height: 800 };`;
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), nextStaticImages()],
  resolve: { alias: { '@': path.resolve(import.meta.dirname, 'src') } },
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    include: ['tests/**/*.test.{ts,tsx}'],
    css: false,
  },
});
