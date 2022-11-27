const Image = require('@11ty/eleventy-img')
const { date } = require('./filters/date')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets/images')
  eleventyConfig.addFilter('date', date)
  eleventyConfig.addNunjucksAsyncShortcode('image', async (src, alt) => {
    const options = {
      widths: [700],
      urlPath: '/assets/images',
      outputDir: './out/assets/images',
    }

    const metadata = await Image(src, options)
    return Image.generateHTML(metadata, { alt })
  })

  return {
    dir: {
      input: 'src',
      output: 'out',
      layouts: '_layouts',
    },
  }
}
