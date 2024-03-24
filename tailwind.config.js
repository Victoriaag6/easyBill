/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "easy-blue": "#4318FF",
        "easy-words": "#B3B7FA",
        "blue-input": "#2B3674",
      },
      backgroundImage: {
        "gradient-easy": "linear-gradient(to top, #4318FF, #868CFF)",
      },
      fontFamily: {
        'DM': ["DM Sans", "sans-serif"],
        'Poppins': ["Poppins", "sans-serif"],
      },
      transitionProperty: {
        colors:
          "background-color, border-color, color, fill, stroke, ring-color, ring-offset-color, ring-offset-width, ring-width",
      },
      gridTemplateColumns: {
        'login': "0.65fr 0.35fr",
      },
    },
  },
  plugins: [],
};
