const date = require('./date')
const webmentions = require('./webmentions')

module.exports = {
  date,
  ...webmentions,
}
