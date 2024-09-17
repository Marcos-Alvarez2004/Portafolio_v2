/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "color-dark": "#892cdc",
        "color-light": "#bc6ff1",
      },
    },
  },
  plugins: [],
};
