const image = require('./shortcodes/image')
const filters = require('./filters')
const pluginRss = require('@11ty/eleventy-plugin-rss')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets/images')
  eleventyConfig.addPassthroughCopy({ 'src/static': '/' })

  Object.keys(filters).forEach(key => {
    eleventyConfig.addFilter(key, filters[key])
  })

  eleventyConfig.addNunjucksAsyncShortcode('image', image)

  eleventyConfig.addPlugin(pluginRss)

  eleventyConfig.addLayoutAlias('base', 'base.njk')
  eleventyConfig.addLayoutAlias('post', 'post.njk')

  return {
    dir: {
      input: 'src',
      output: 'out',
      layouts: '_layouts',
      includes: '_partials',
    },
  }
}
