module.exports = {
  target: 'serverless',
  env: {
    API_ENDPOINT: process.env.API_ENDPOINT,
    ACCESS_TOKEN: process.env.ACCESS_TOKEN,
    GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT
  }
}
