import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import solidJs from "@astrojs/solid-js";

export default defineConfig({
  site: "https://pegki.com/",
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: [
        "https://pegki.com/sitemap-index.xml",
        "https://pegki.com/sitemap-0.xml",
      ],
    }),
    solidJs(),
    UnoCSS({ injectReset: true }),
  ],
  output: "server",
  // Remove the line below if not deploying to Netlify
   adapter: netlify(),
  //adapter: caprover()
});
