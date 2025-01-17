
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      keyframes: {
        logoAnimation: {
          "0%": {
            transform: "scale(0)",
            opacity: "0",
            top: "40%",
            left: "50%",
          },
          "70%": {
            transform: "scale(1)",
            opacity: "1",
          },
          "90%": {
            transform: "translate(-160%, -80%) scale(1)",
            opacity: "0",
            top: "0",
            left: "0",
          },
          "100%" : {
            transform: "translate(-180%, -70%) scale(1)",
            opacity: "0",
            top: "0",
            left: "0",
          }
        },
      },
      animation: {
        "logo-animation": "logoAnimation 4s ease-in-out forwards",
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

