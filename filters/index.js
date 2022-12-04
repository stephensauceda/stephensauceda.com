const date = require('./date')
const webmentions = require('./webmentions')
const domain = require('./domain')

module.exports = {
  date,
  domain,
  ...webmentions,
}
