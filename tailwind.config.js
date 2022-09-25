/** @type {import('tailwindcss').Config} */
module.exports = {
  parge: [
    "*.html"
  ],
  content: ['*.{js,html}'],
  mode: "jit",
  darkMode:`media`,
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Fire sans", "sans-serif"]
    }
  },
  plugins: [],
}
