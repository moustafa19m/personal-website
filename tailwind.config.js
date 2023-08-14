/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/*.{html,js,jsx}",
    '*.{html,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: {
          0: '#eaedf1',
          100: '#939597',
          200: '#29282A',
          grey: "#9B9DA0",
          DEFAULT: '#161618',
          dark: '#101011'
        },
        golden: {
          DEFAULT: '#E1BA3E',
        }
      },
    },
    screens: {
      'sm': '640px',
      'md': '900px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl':'1536px',
    },
  },
  plugins: [],
}

