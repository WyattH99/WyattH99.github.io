/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    // Wrap hover: variants in @media (hover: hover) so taps on touch
    // screens don't leave elements stuck in their hover state.
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./*.html",
    "./*.md"
  ],
  theme: {
    extend: {
      colors: {
        accent: '#FAB406',
      },
    },
  },
  plugins: [],
}
