/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: "#CE7BBC",
        blue_dark: "#003459",
        blue_light: "#00A8E8",
        purple: "#2B29B5",
        green: "#168628",
        red: "#AA0101",
        gray: "#D9D9D9",
        gray_light: "#F9F2F2",
        black: "#000000",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
