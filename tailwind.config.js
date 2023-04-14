/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        xs2: '220px',
        xs: '480px',
        sm: '500px',
        md: '768px',
        lg: '1028px',
        xl: '1440px',
      },
      colors: {
        'light-gray': '#494D61',
        'navy-blue': '#1B1F32',
        'ligt-navy-blue': '#1D283C',
        'sky-blue': '#72D7F0',
        'light-blue': '#98B6FF',
        'dark-yellow': '#E8BA35'
      },
    },
  },
  plugins: [],
}

