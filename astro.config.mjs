import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ivanbensa.github.io',
  base: '/kos-jednota-hlozany',
  vite: {
    plugins: [tailwindcss()],
  },
});