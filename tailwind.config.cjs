/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        mainBlue: '#1B1464',
        mainJam: '#9E005D',
        purple: '#7A0047',
        lavender: '#DCDBE7',
        royal: '#0D256C'
      }
    },
  },
  plugins: [],
}
