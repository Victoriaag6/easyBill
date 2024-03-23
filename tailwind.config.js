/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors:{
        'easy-blue': '#4318FF'
      },
      backgroundImage: {
        'gradient-easy': 'linear-gradient(to right, #4318FF, #868CFF)'
      },
      fontFamily: {
        'DM': ['DM Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}

