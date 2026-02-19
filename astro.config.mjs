import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://astroship.web3templates.com",
  integrations: [sitemap(), icon()],
  legacy: {
    collections: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
