const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: [ 'Montserrat', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      serif: [ 'Cormorant Garamond', 'Lora', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      body : [ 'Lora', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
    },
    colors: {
      pink: {
        100: "#FCF3F3",
        400: "#F3CECE",
        500: "#F0C2C2",
      },
      rose: colors.rose,
      gray: colors.warmGray,
      white: '#ffffff',
    },
    container: {
      center: true,
      padding: '3rem',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
