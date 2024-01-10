/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brownd: "#1A120B",
        brownl: "#3C2A21",
        beiged: "#d3c1a0",
        beigel: "#E5E5CB",
      },
      fontFamily: {
        quicksand: "Quicksand, sans-serif",
      },
    },
  },
  plugins: [],
};
