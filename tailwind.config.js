/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      foreground: '#000',
      background: '#fff',
      main: '#0276c3',
      'light-blue': '#009BD6',
      cyan: '#00BBCC',
      teal: '#00D7AB',
      green: '#92EC85',
      yellow: '#f9c859',
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
    extend: {
      fontSize: {
        xxs: '11px'
      },
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
        alt: ['"Gochi Hand"', 'cursive']
      }
    }
  },
  plugins: []
}
