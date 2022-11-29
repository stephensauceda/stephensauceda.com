const EleventyFetch = require('@11ty/eleventy-fetch')
const { domain } = require('./site')
const WEB_MENTIONS_KEY = 'pNwSnTFOAqhsaijM3U9hww'

const MENTIONS_URL = `https://webmention.io/api/mentions.jf2?domain=${domain}&token=${WEB_MENTIONS_KEY}&per-page=1000`

module.exports = async function fetchWebmentions() {
  console.log('Fetching webmentions from webmention.io...')

  try {
    return EleventyFetch(MENTIONS_URL, {
      duration: '1h',
      type: 'json',
    })
  } catch (error) {
    console.log('Error fetching webmentions...')
    console.log(error)
    return { children: [] }
  }
}
