/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '50%': '50%'
      }
    },
    colors: {
      primary: "rgb(29, 155, 240)",
      secondary: "#032538",
      tertiary: "#808080",
      background: "#97191D"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

