import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.pixelseries.xyz',
    trailingSlash: 'always',
    output: 'static',
    format: 'file'
});
