// @ts-check
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },

  experimental: {
    csp: import.meta.env.PROD,
    failOnPrerenderConflict: true,
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Newsreader",
        cssVariable: "--font-title",
      },
      {
        provider: fontProviders.google(),
        name: "Figtree",
        cssVariable: "--font-sans",
      },
      {
        provider: fontProviders.google(),
        name: "IBM Plex Mono",
        cssVariable: "--font-mono",
      },
    ],
  },

  adapter: vercel(),
});
