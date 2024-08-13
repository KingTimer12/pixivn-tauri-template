/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#e8c687",
          foreground: "#F5DEB3"
        }
      }
    },
  },
  plugins: [],
}
