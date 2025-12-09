// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://agenticcontrol.dev',
  integrations: [
    sitemap(),
    mdx(),
  ],
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      langs: ['python', 'typescript', 'javascript', 'bash', 'yaml', 'json', 'pascal', 'markdown'],
    },
  },
});