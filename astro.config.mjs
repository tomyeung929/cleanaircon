import { defineConfig } from "astro/config";
import { site } from "./src/data/site.js";

export default defineConfig({
  site: site.url,
  base: process.env.DEPLOY_BASE_PATH || "/",
  compressHTML: true,
});
