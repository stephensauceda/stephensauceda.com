import { Octokit } from '@octokit/rest'
import slugify from '@sindresorhus/slugify'
import date from '../filters/date'

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
})

export async function onRequestPost({ request }) {
  const data = await request.json()
  const title = data.properties.name[0]
  const content = data.properties.content[0].html

  const fileName = slugify(title)
  let fileContent = []

  if (!content.includes('---')) {
    fileContent.push('---')
    fileContent.push('date: ' + date(new Date(), 'YYYY-MM-DD'))
    fileContent.push('title: ' + title)
    fileContent.push('---')
  }
  fileContent.push(content)

  try {
    octokit.repos.createOrUpdateFileContents({
      owner: 'stephensauceda',
      repo: 'stephensauceda.com',
      message: 'Adding post: ' + title,
      path: 'src/archive/' + filename + '.md',
      content: Buffer.from(fileContent.join('\n')).toString('base64'),
    })

    const response = new Response('post created', {
      status: 201,
    })

    response.headers.set('Location', 'https://stephensauceda.com/archive')

    return response
  } catch (error) {
    console.log(error)
    return new Response('something went wrong', {
      status: 500,
      body: JSON.stringify(error),
    })
  }
}
