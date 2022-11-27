const dayjs = require('dayjs')
const utc = require('dayjs/plugin/utc')
dayjs.extend(utc)

module.exports = function date(date, format = 'MMMM DD, YYYY') {
  return dayjs.utc(date).format(format)
}
