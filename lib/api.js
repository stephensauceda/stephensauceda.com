const Prismic = require('prismic-javascript')

function getAPI(req) {
  return Prismic.getApi(process.env.API_ENDPOINT, {
    req,
    accessToken: process.env.ACCESS_TOKEN
  })
}

module.exports = {
  getAPI
}
