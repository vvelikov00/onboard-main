/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        olive: {
          50: "#F3F7E8",
          100: "#E9F1D5",
          200: "#D3E3AB",
          300: "#BDD481",
          400: "#A7C657",
          500: "#8BAB3A",
          600: "#6F892F",
          700: "#546723",
          800: "#384517",
          900: "#1C220C",
          950: "#0C0F05",
        },
        primary: "#FCFCFA",
        secondary: "#f5f5f8",
        reversed: {
          primary: "#121F1F",
          secondary: "#2d3030",
        },
      },
    },
  },
  plugins: [],
};
