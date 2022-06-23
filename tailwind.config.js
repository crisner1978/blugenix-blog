module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        "md-tel": "900px",
      },
      fontFamily: {
        deca: ["Lexend Deca"],
        fancy: ["Red Hat Display"],
        avenir: ['Avenir Next'],
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
