/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: '#1fb6ff',
        purple: '#7e5bef',
        pink: '#ff49db',
        orange: '#ff7849',
        green: '#13ce66',
        yellow: '#ffc82c',
        'gray-dark': '#273444',
        gray: '#8492a6',
        'gray-light': '#d3dce6',
        foreground: '#000',
        background: '#fff',
        accents: {
          1: '#fafafa',
          2: '#eaeaea',
          3: '#999',
          4: '#888',
          5: '#666',
          6: '#444',
          7: '#333',
          8: '#111'
        }
      },
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
        alt: ['"Gochi Hand"', 'cursive']
      }
    }
  },
  plugins: []
}
