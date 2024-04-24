/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myPurple: '#3A244A', // Example color code
        myRed: '#D72638'
      }
    },
  },
  plugins: [],
}

