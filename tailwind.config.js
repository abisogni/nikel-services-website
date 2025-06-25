/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-cyan': '#4AC9F4',
        'brand-orange': '#F5821F',
      },
      fontFamily: {
        'jura': ['Jura', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

