/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.{css}",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./layouts/*.{vue,js}",
    "./layouts/**/*.{vue,js}",
    "./pages/*.{vue,js}",
    "./pages/**/*.{vue,js}",
    "./plugins/**/*.{js,ts}",
    "./*.{vue,js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
