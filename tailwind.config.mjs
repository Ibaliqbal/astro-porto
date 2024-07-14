/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.25rem",
      },
      maxWidth: {
        layout: "1400px",
      },
    },
  },
  plugins: [],
};
