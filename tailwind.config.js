/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0a0a11',
        darkCard: '#23263a',
        accent: '#e040fb',
        accentHover: '#c026d3',
        light: '#f3f4f6',
      },
    },
  },
  plugins: [],
}

