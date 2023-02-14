/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        "titillium": ['"Titillium Web"', 'sans-serif']
      },
      colors: {
        "cl-yellow-main": "#FCD535",
        "cl-orange-hover": "#C99400",
        "cl-light-005": "rgba(255,255,255,.05)",
        "cl-light-006": "rgba(255,255,255,.06)",
        "cl-circle-yellow": "rgba(255, 173, 49, 0.38)",
        "cl-white-light": "#e6e6e6",
        "cl-gray-light": "rgb(183, 189, 198)",

      },
      backgroundImage: {
        "bgi-filled-inputsearch": "url('./assets/filled-inputsearch.png')",
        "bgi-banner-bg": "url('./assets/banner-bg.png')",
        "bgi-rocket-icon": "url('./assets/rocket.png",
        "bgi-slide-color": "linear-gradient(90deg, rgb(63, 123, 255) 0%, rgb(190, 73, 223) 32.04%, rgb(253, 179, 36) 66%, rgb(2, 234, 171) 100%)",
        "bgi-circle-yellow": "linear-gradient(rgb(240, 185, 11) 0%, rgb(255, 224, 90) 100%)",
        "bgi-linear-button": "linear-gradient(95.26deg, rgb(67, 122, 254) -0.63%, rgb(172, 81, 228) 59.39%, rgb(253, 179, 36) 104.51%)",
        "bgi-linear-button-hover": "linear-gradient(120deg, rgb(67, 122, 254) -0.62%, rgb(172, 81, 228) 19.23%, rgb(253, 179, 36) 35.45%, rgb(82, 116, 251) 47.79%, rgb(161, 86, 231) 65.47%, rgb(250, 175, 44) 81.93%, rgb(82, 117, 251) 92.17%)"
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
        },
        flowbutton: {
          "0%": {
            backgroundPosition: "0 100%"
          },
          "100%": {
            backgroundPosition: "100% 0"
          },
        }
      },
      animation: {
        flowtext: "flowtext 5s ease-in-out infinite",
        flowbutton: "flowbutton 2s linear infinite",
      },
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
      '2.5xl': "32px",
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    }
  },
  plugins: [],
}

// background-image: linear-gradient(90deg, rgb(63, 123, 255) 0%, rgb(190, 73, 223) 32.04%, rgb(253, 179, 36) 66%, rgb(2, 234, 171) 100%);