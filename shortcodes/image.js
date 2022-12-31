const Image = require('@11ty/eleventy-img')

async function image(src, alt) {
  const options = {
    widths: [700],
    urlPath: '/assets/images',
    outputDir: './out/assets/images',
  }

  const metadata = await Image(src, options)
  return Image.generateHTML(
    metadata,
    { alt },
    {
      whitespace: 'inline',
    }
  )
}

module.exports = image
