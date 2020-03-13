const Prismic = require('prismic-javascript')

const client = Prismic.client(process.env.API_ENDPOINT, {
  accessToken: process.env.ACCESS_TOKEN
})

async function getSingle(docName) {
  try {
    // Use the function to get a single document for home
    const document = await client.getSingle(docName)
    return { document }
  } catch (error) {
    console.error(error)
    return error
  }
}

async function getAllOfType(type, options = {}) {
  try {
    const document = await client.query(
      Prismic.Predicates.at('document.type', type),
      options
    )
    return document.results
  } catch (error) {
    console.error(error)
    return error
  }
}

async function getByUID(uid) {
  try {
    const document = await client.getByUID('post', uid)
    return document
  } catch (error) {
    console.error(error)
    return error
  }
}

async function getPosts(tags = [], options = {}) {
  try {
    const document = await client.query(
      [
        Prismic.Predicates.at('document.type', 'post'),
        Prismic.Predicates.at('document.tags', tags)
      ],
      options
    )
    return document.results
  } catch (error) {
    console.error(error)
    return error
  }
}

module.exports = {
  client,
  getSingle,
  getAllOfType,
  getByUID,
  getPosts
}
