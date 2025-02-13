/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      color_bg:'#1f1f38',
      color_bg_variant:'#2c2c6c',
      color_primary : '#4db5ff',
      color_white : '#fff',
      color_transparent : 'transparent',
      color_gray: '#ffffff99',


    }
  },
  plugins: [],
}


// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//     colors:{
//       color_bg:'#4c0519',
//       color_bg_variant:'#be123c',
//       color_primary : '#fb7185',
//       color_white : '#fff',
//       color_transparent : 'transparent',
//       color_gray: '#fecdd3',


//     }
//   },
//   plugins: [],
// }