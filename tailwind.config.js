/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/swiper/**/*.{js,css}',
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.css",
    // Include any other paths where Swiper components are used
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
