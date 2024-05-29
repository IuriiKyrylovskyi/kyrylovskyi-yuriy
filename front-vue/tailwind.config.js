/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  screens: {
    sm: '640px',
    md: '768px'
  },
  variants: {
    extend: {}
  },
  plugins: []
}
