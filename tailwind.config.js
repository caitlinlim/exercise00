// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
    // colors: {
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   'sky-50': '#f0f9ff',
    //   'sky-100': '#e0f2fe',
    //   'sky-200': '#bae6fd',
    //   'sky-300': '#7dd3fc',
    //   'sky-400': '#38bdf8',
    //   'sky-500': '#0ea5e9',
    //   'sky-600': '#0284c7',
    //   'sky-700': '#0369a1',
    //   'sky-800': '#075985',
    //   'sky-900': '#0c4a6e',
    //   'sky-950': '#082f49',
    // },
     extend: {},

   },
   variants: {
     extend: {},
   },
   plugins: [],
 }
