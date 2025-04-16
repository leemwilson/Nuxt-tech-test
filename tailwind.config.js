/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.{js,vue,ts}',
    './pages/**/*.{js,vue,ts}',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        light: '#ffffff',
        dark: '#0f172a',
        cardLight: '#ebd8db',
        cardDark: '#f8fae8',
      }
    }
  },
  darkMode: 'class',
  plugins: []
}