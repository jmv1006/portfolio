/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "source sans pro": ["Source Sans Pro", "sans-serif"],
        circular: ["Circular Std", "sans-serif"],
      },
    },
  },
  plugins: [],
};
