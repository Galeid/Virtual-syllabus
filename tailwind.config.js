/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        'crumpled-paper': 'url(\'/assets/crumpled-paper.png\')',
      },
      backgroundSize: {
        '100%': '100% 100%',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        'skyblue': {
          100: '#DCF3F9',
          300: '#77D5EA',
          400: '#68d2f3',
          500: '#36c3ef',
          600: '#04B5EC',
        },
        'jade': {
          500: '#39D9AF',
          600: '#08CF9B',
        }
      },
      fontFamily: {
        'nanumpen': 'NanumPem-Regular',
        'gleglo': 'Glegoo',
        'gleglo-bold': 'Glegoo-Bold',
        'gilroy-extrabold': 'Gilroy-ExtraBold',
      },
    },
  },
  plugins: [],
};
