const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: true,
    content: ['src/*.html']
  },
  darkMode: 'media',
  theme: {
    colors: {
      white: colors.white,
      cyan: colors.cyan,
      gray: colors.warmGray,
    },  
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
