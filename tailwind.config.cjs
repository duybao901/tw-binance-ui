/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        "titillium": ['"Titillium Web"', 'sans-serif']
      },
      colors: {
        "yellow-main": "#FCD535",
        "orange-hover": "#C99400",
        "light-005": "rgba(255,255,255,.05)",
        "light-006": "rgba(255,255,255,.06)",

      },
      backgroundImage: {
        "filled-inputsearch": "url('./assets/filled-inputsearch.png')",
        "banner-bg": "url('./assets/banner-bg.png')",
        "slide-color": "linear-gradient(90deg, rgb(63, 123, 255) 0%, rgb(190, 73, 223) 32.04%, rgb(253, 179, 36) 66%, rgb(2, 234, 171) 100%)"
      },
      keyframes: {
        flowtext: {
          "0%": {
            backgroundPosition: "0 100%"
          },
          "50%": {
            backgroundPosition: "100% 0"
          },
          "100%": {
            backgroundPosition: "0 100%"
          }
        }
      },
      animation: {
        flowtext: "flowtext 5s ease-in-out infinite"
      }
    },
    backgroundSize: {
      "100%": "100%",
      "500%": "500%",
    },
    maxWidth: {
      "1200": "1200px"
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '2.5xl':"32px",
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    }
  },
  plugins: [],
}

// background-image: linear-gradient(90deg, rgb(63, 123, 255) 0%, rgb(190, 73, 223) 32.04%, rgb(253, 179, 36) 66%, rgb(2, 234, 171) 100%);