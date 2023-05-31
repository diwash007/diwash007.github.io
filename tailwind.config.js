/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7e60f0",
      },
      spacing: {
        nav: "66px",
      },
      animation: {
        page: "slide .6s ease-in-out forwards",
      },
      keyframes: {
        slide: {
          "0%": {
            opacity: 0,
            transform: "translateX(100px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0px)",
          },
        },
      },
    },
  },
  plugins: [],
};
