/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter, sans-serif"],
    },
    extend: {
      colors: {
        "sosmed-primary-color": "#8ECAE6",
        "sosmed-secondary-color": "#219EBC",
        "sosmed-primary-color-dark": "#023047",
        "alternative-color": "#FFB703",
        "alternative-color-2": "#FB8500",
        "background-color": "#E7ECEF",
        "badge-red": "#E70C0C",
        "comment-field": "#B3B3B3",
        "focus-border-b": "#219EBC",
      },
    },
  },
  plugins: [require("daisyui")],
};
