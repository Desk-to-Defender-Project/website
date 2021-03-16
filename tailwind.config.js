module.exports = {
  darkMode: false,
  theme: {
    fontFamily: {
      display: ['Verdana', 'sans-serif'],
      body: ['Verdana', 'sans-serif'],
    },
    container: {
      center: true,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-debug-screens'),
    require('tailwindcss-textshadow'),
  ],
  purge: ['./src/**/*.js', './src/**/*.njk', './src/**/*.svg'],
}
