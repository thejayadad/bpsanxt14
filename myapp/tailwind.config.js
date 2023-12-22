/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ebf5df',
        orange: '#e8871e',
        liteBlue: '#bad4aa',
        liteBrown: '#b4d4aa',
        liteYellow: '#edb458'
      }
    },
  },
  plugins: [],
}
