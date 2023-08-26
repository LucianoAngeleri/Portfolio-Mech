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
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        '50': '#f5f8f7',
        '100': '#dfe8e6',
        '200': '#bfd0cd',
        '300': '#98b0ad',
        '400': '#698582',
        '500': '#577572',
        '600': '#445d5a',
        '700': '#394c4a',
        '800': '#313e3d',
        '900': '#2b3635',
        '950': '#161d1d',
      },
      accent: {
        light: "#938D82",
        dark: "#62513D",
      },
      dark: "#25262A",
      light: "#EDF0EE",
      white: "#FFFFFF",
      black: "#000000",
    },
    fontFamily: {
      display: '"Darker Grotesque", sans-serif',
      heading: '"Encode Sans", sans-serif',
      body: '"Encode Sans", sans-serif',
    },
    extend: {
    },
  },
  plugins: [
    require('@headlessui/tailwindcss')
  ],
}

