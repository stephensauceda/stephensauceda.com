const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        'sms-primary': colors.teal[700],
        'sms-secondary': colors.gray[700]
      },
      maxWidth: theme => ({
        'sms-page-width': theme('screens.sm')
      })
    }
  },
  variants: {},
  plugins: []
}
