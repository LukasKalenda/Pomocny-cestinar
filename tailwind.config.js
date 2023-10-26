/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_white: "#ffffff",
        primary_dark: "#1f2937",
        secondary: "#172554",
        c_gray: "#E7F2F8",
        accent: "#9C27B0",
        error: "#f44336",
        warning: "#ffeb3b",
        info: "#2196f3",
        success: "#4caf50",
        gray_text: "#4b5563",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
