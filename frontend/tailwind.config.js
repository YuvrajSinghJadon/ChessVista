/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E5F1E3",
        secondary: {
          100: "#a3cd9e",
          200: "#529471",
          300: "#35635b",
        },
      },
      fontFamily: {
        jura: "'Jura', sans-serif",
        k2d: "font-family: 'K2D', sans-serif;",
      },
    },
  },
  plugins: [],
};
