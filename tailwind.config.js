/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/swiper/**/*.{js,css}',
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        background: '#1e1e2e', // custom color for background
        neonGreen: '#50fa7b', // custom color for neon green accents
      },
      screens: {
        'sm': '480px',  // Small devices like phones
        'md': '768px',  // Medium devices like tablets
        'lg': '1024px', // Large devices like desktops
        'xl': '1440px', // Extra-large devices
      },
    },
  },
  plugins: [],
}
