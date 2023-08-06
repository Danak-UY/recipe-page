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
          neutral: "#E5E5E5",
          light: "#A9A9A9",
          dark: "#4E5150",
        },
        orange:{
          DEFAULT:"#F2994A"
        }
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
