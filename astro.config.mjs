import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://ivanbensa.github.io',
  base: '/kos-jednota-hlozany',

  integrations: [icon()],

  vite: {
    plugins: [tailwindcss()],
  },
});