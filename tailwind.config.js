/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        midyellow:"#FFC700",
        lightBlue:"#4CCD99",
        lightYellow:"#FFF455"
      }
    },
  },
  plugins: [],
}

