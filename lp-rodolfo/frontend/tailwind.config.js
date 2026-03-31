/** @type {import('tailwindcss').Config} */
module.exports = {
  // Atualizado para ler as suas pastas pages e script
  content: ["./pages/**/*.html", "./script/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      colors: {
        brand: {
          teal: "#015750",
          tealDark: "#01403a",
          green: "#00d03a",
          dark: "#0a1526",
        },
      },
    },
  },
  plugins: [],
};
