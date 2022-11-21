import rss from '@astrojs/rss';

export const get = () =>
  rss({
    title: 'Jon Coleman',
    description: 'My personal site & blog',
    site: 'https://my-blog-site.netlify.app',
    items: import.meta.glob('./**/*.md'),
    customData: `<language>en-us</language>`,
  });
