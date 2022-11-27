const image = require('./shortcodes/image')
const date = require('./filters/date')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets/images')
  eleventyConfig.addFilter('date', date)
  eleventyConfig.addNunjucksAsyncShortcode('image', image)

  return {
    dir: {
      input: 'src',
      output: 'out',
      layouts: '_layouts',
      includes: '_partials',
    },
  }
}
