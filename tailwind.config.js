/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontFamily: {
      mono: ['IBM Plex Mono'],
      rubik: 'Rubik'

    },
    extend: {
      colors : {
        'dark-navi' : '#020c1b',
        'navi' : '#0a192f',
        'light-navy' : '#112240',
        'lightest-navy' : '#233554',
        'navy-shadow' : 'rgba(2,12,27,0.7)',
        'dark-slate' : '#495670',
        'slate' : '#8892b0',
        'light-slate' : '#a8b2d1',
        'lightest-slate' : '#ccd6f6',
        'white-dream' : '#e6f1ff',
        'green-goblin' : '#64ffda',
        'green-goblin-tint' : 'rgba(100,255,218,0.1)'

      }
    },
  },
  plugins: [],
}
