import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://a2native.dev',
  output: 'static',
  build: {
    format: 'file',
  },
});
