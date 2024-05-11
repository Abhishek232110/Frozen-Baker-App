/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        buttomColor: "#E4AC4F",
        bgColor: "#E4AC4F",
        textColor: "#61677A",
      },
    },
  },
  plugins: [],
};
