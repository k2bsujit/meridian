import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://meridian-residences.netlify.app", // PLACEHOLDER: update once a real domain/Netlify site name is set
  vite: {
    plugins: [tailwindcss()],
  },
});
