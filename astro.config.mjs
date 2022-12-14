import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import addClasses from './add-classes.mjs';

// https://astro.build/config
export default defineConfig({
  build: { format: 'file' },
  integrations: [image()],
  markdown: {
    rehypePlugins: [
      'rehype-slug',
      ['rehype-autolink-headings', { behavior: 'wrap' }],
      [addClasses, { 'h1,h2,h3': 'heading-anchor' }],
    ],
    extendDefaultPlugins: true,
  },
});
