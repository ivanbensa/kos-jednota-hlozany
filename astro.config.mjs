
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://www.kosjednota.com',

  integrations: [icon()],

  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    defaultLocale: 'sk',
    locales: ['sk', 'sr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
