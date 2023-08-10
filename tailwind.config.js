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
          DEFAULT: '#161618',
        },
      },
    },
  },
  plugins: [],
}

