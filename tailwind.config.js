/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        buttomColor: "#E4AC4F",
        bgColor: "#FEB941",
        textColor: "#61677A",
      },
      backgroundImage: {
        splashscreen: "url('/assets/frozenlogo.png')",
      },
    },
  },
  plugins: [],
};
