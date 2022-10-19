/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "sosmed-primary-color": "#5699BE",
        "sosmed-secondary-color": "#ACD9F2",
        "sosmed-primary-color-dark": "#031F2E",
        "badge-red": "#E70C0C",
        "comment-field": "#B3B3B3",
        "focus-border-b": "#219EBC",
      },
    },
  },
  plugins: [require("daisyui")],
};
