/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#f3c99c',
      },
      fontFamily: {
        'text': ['Manrope', 'sans-serif'],
      }
    },
  },
  plugins: [],
}