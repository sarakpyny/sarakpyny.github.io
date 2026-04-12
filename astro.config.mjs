import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
    site: "https://sarakpyny.github.io",
    integrations: [sitemap()],
});