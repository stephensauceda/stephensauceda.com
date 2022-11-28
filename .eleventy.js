const image = require('./shortcodes/image')
const date = require('./filters/date')
const pluginRss = require('@11ty/eleventy-plugin-rss')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets/images')
  eleventyConfig.addFilter('date', date)
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
