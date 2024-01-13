/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgColor: "rgba(21, 12, 47, 0.54)",
        higherCardColor: "rgba(217, 217, 217, 0.11)",
        midCardColor: "rgba(217, 217, 217, 0.04)",
        lowerCardColor: "rgba(217, 217, 217, 0)",
      }
    },
  },
  plugins: [],
}

