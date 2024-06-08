/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,njk}'],
  theme: {
    extend: {
      screens: {
        md: '840px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
