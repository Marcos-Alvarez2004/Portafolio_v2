// @ts-check
import { defineConfig } from "astro/config";
// vite-plugin-compression
import compression from "vite-plugin-compression";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  vite: {
    plugins: [compression({ algorithm: "brotliCompress" })],
  },
});
