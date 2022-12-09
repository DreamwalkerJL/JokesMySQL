/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,tsx,ts}'],
  theme: {
    screens: {
      sm: '480px',
      md: '700px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      Lato: ['Lato', 'Helvetica', 'Arial', 'sans-serif'],
      Montserrat: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      brightRed: 'hsl(12, 88%, 59%)',
      brightRedLight: 'hsl(12, 88%, 69%)',
      brightRedSupLight: 'hsl(12, 88%, 95%)',
      darkBlue: 'hsl(228, 39%, 23%)',
      darkGrayishBlue: 'hsl(227, 12%, 61%)',
      veryDarkBlue: 'hsl(233, 12%, 13%)',
      veryPaleRed: 'hsl(13, 100%, 96%)',
      veryLightGray: 'hsl(0, 0%, 98%)',
    },
  },
  plugins: [],
};
