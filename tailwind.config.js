/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,njk}"],
  theme: {
    extend: {
      screens: {
          'betterhover': {'raw': '(hover: hover)'},
      }
    },
  },
  plugins: [],
}

