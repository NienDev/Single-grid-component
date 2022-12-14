/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screen: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        cyan: 'hsl(179, 62%, 43%)',
        lightCyan: '#70D0D0',
        brightYellow: 'hsl(71, 73%, 54%)',
        lightGray: 'hsl(204, 43%, 93%)',
        grayishBlue: ' hsl(218, 22%, 67%)',
      }
    }
  },
  plugins: [],
}
