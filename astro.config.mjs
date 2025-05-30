import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: "https://canales0396.github.io",
  integrations: [tailwind(), icon(), mdx(), sitemap()]
});
