import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from "@astrojs/sitemap";
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  // 👉 YOUR PERSONAL DOMAIN ----------------------------------------------------
  // Replace the URL below with the domain where you’ll host the site.
  // Keeping the trailing slash is important for correct canonical URLs.
  site: "https://imsurajkr.github.io",
  base: "/sc/",
  integrations: [ sitemap()]
});