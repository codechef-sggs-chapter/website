
const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      // Build your palette here
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      bluegray:colors.blueGray,
      coolgray:colors.coolGray,
      warngray:colors.warmGray,
      orange:colors.orange,
      amber:colors.amber,
      lime:colors.lime,
      green:colors.emerald,
      teal:colors.teal,
      red: colors.red,
      lightblue: colors.lightBlue,
      blue:colors.blue,
      indigo:colors.indigo,
      funchisa:colors.funchisa,
      pink:colors.pink,
      rose:colors.rose,
      yellow: colors.amber,
      cyan:colors.cyan
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
