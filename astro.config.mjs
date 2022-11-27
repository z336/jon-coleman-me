import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import addClasses from './add-classes.mjs';

// https://astro.build/config
export default defineConfig({
  integrations: [image()],
  markdown: {
    rehypePlugins: [
      'rehype-slug',
      ['rehype-autolink-headings', { behavior: 'prepend' }],
      [addClasses, { 'h1,h2,h3': 'permalink' }],
    ],
    extendDefaultPlugins: true,
  },
});
