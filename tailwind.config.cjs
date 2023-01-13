/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        "titillium": ['"Titillium Web"', 'sans-serif']
      },
      colors: {
        "orange-hover": "#C99400",
      },
      backgroundImage: {
        "filled-inputsearch": "url('./assets/filled-inputsearch.png')",
        "banner-bg": "url('./assets/banner-bg.png')"
      },
    },
    backgroundSize: {
      "100%": "100%"
    }
  },
  plugins: [],
}