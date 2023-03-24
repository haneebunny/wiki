/** @type {import('tailwindcss').Config} */
module.exports = {
  variants: {
    tableLayout: ["responsive", "hover", "focus"],
  },
  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        "hl-1": "#fffbf4",
      },
    },
  },
  plugins: [],
};
