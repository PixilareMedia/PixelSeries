import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://pixelseries.xyz',
  trailingSlash: 'always',
  output: 'static',
  compressHTML: true,
  build: {
    format: 'directory',
    assets: 'astro'
  },
  server: {
    port: 8083,
    host: true
  }
});
