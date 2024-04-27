/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      // center: true,
    },
    extend: {},
  },
  daisyui: {
    themes: ["bumblebee", "halloween"],
    darkTheme: "halloween",
    // lightTheme: "bumblebee",
    themeRoot: ":root"
    // themes: [{"light" : "bumblebee"}, {"dark":"halloween"}],
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("daisyui"),
  ],
  // daisyui: {
  //   themes: [
      
  //   ],
  // },
};
