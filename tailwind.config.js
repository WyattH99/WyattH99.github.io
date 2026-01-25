/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./index.html",
    "./*.md"
  ],
  theme: {
    extend: {
      screens: {
          'betterhover': {'raw': '(hover: hover)'},
      }
    },
  },
  plugins: [],
}

