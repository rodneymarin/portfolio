/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors: {
      transparent: "transparent",
      "dark": "#251F3D",
      "regular-text": "#f5d6c7",
      "faded-text": "#997767",
      "button-hover": "#342b63",
      "accent-light": "#b3a4ff"
    },
    extend: {
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"]
      }
    },
  },
  plugins: [],
}

