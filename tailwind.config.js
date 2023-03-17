/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./screens/**/*.{js,jsx,ts,tsx}", 
    "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // fontFamily: {
      //   baskervville: ['Baskervville', 'serif'],
      // }
    },
  },
  plugins: [],
}

//in case theres issue with importing fonts, put this in .node_modules/tailwindcss/tailwind.css
// @font-face {
//   font-family: 'Baskervville', serif;
//   src: url("../assets/fonts/Baskervville/Baskervville-Regular.ttf");
// }