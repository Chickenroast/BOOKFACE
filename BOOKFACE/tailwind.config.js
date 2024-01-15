/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        '3xl': '2000px',
      },
      colors: {
         brownd: '#1A120B',
        brownl: '#3E2723',
        beiged: '#F8F4E1',
        beigel: '#E5E5CB',
      },
      fontFamily: {
        quicksand: "Quicksand, sans-serif",
      },
    },
  },
  plugins: [
    require ('tailwind-scrollbar'),
],
};
