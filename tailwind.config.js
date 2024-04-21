/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    container:{
      // center: true,
    },
    extend: {},
  },
  daisyui: {
    themes: ["bumblebee", "halloween"],
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui')],
}

