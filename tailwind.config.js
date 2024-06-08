/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,njk}'],
  theme: {
    clipPath: {
      parallelogram: 'polygon(0 0, 90% 0, 100% 100%, 10% 100%)',
    },
    extend: {
      screens: {
        md: '840px',
      },
      transitionProperty: {
        width: 'width',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('tailwind-clip-path'),
  ],
}
