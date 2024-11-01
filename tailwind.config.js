/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ['./src/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {
//       colors: {
//         primary: '#9b5ce4',
//         seconday: '#333333',
//         light: "#b0b0b0",
//         primaryHover: '#7639c0',
//         secondaryColor: '#ffffff',
//         black: '#000000',
//         bg: '#f8f8f8'
//       },
//     },
//   },
//   daisyui: {
//     themes: ['lofi'],
//   },
//   plugins: [require('daisyui')],
// }


module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Enable dark mode class
  theme: {
    extend: {
      colors: {
        lightBg: 'var(--bg-light)',
        darkBg: 'var(--bg-dark)',
        lightText: 'var(--text-light)',
        darkText: 'var(--text-dark)',
      },
    },
  },
    daisyui: {
    themes: ['lofi'],
  },
  plugins: [require('daisyui')],
};