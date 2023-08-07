/** @type {import('tailwindcss').Config} */

const animationPlugin = require("tailwindcss-animate");
const gridAreaPlugin = require("@savvywombat/tailwindcss-grid-areas");

module.exports = {
  content: ["./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        gray: {
          "x-light": "#BDBDBD",
          light: "#BDBDBD",
          neutral: "#4F4F4F",
          dark: "#333333",
        },
        orange: {
          DEFAULT: "#F2994A",
        },
      },
      fontSize: {
        "3xs": "0.5rem",
        "2xs": "0.625rem",
      },
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: ['"Playfair Display"', "serif"],
    },
    container: {
      center: true,
    },
  },
  plugins: [animationPlugin, gridAreaPlugin],
};
