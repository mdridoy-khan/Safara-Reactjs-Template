/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FBBF24",
        secondary: "#222222",
        white: "#ffffff",
      },
      fontFamily: {
        primary: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}

