/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '350px',
      'md': '750px',
      'lg': '1100px',
    },
    extend: {},
  },
  plugins: [],
}

