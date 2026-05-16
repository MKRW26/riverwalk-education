/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          deep: "#0f172a",  // Dark professional slate/navy
          light: "#06b6d4", // Clean, modern accent blue/teal
        }
      }
    },
  },
  plugins: [],
}
