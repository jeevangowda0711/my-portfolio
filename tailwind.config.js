/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#1e1e2e', // custom color for background
        neonGreen: '#50fa7b', // custom color for neon green accents
      },
    },
  },
  plugins: [],
}