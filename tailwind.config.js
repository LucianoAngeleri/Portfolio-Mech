/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    colors: {
      primary: "#698582",
      accent:{
        light: "#938D82",
        dark: "#62513D",
      },
      dark: "#25262A",
      light: "#EDF0EE",
      white: "#FFFFFF",
      black: "#000000",
    },
    fontFamily:{
      display: '"Darker Grotesque", sans-serif',
      heading: '"Encode Sans", sans-serif',
    },
    extend: {
  },
},
plugins: [
  require('@headlessui/tailwindcss')
],
}

