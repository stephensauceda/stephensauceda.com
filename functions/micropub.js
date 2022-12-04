import { Octokit } from '@octokit/rest'
import slugify from '@sindresorhus/slugify'
import date from '../filters/date'

export async function onRequestPost({ request, env }) {
  const octokit = new Octokit({
    auth: env.GITHUB_TOKEN,
  })
  const data = await request.json()
  console.log({ received: data })
  const title = data.properties.name[0]
  const content = data.properties.content[0].html
  const categories = data.properties.category

  const fileName = slugify(title)
  let fileContent = []

  if (!content.includes('---')) {
    fileContent.push('---')
    fileContent.push('date: ' + date(new Date(), 'YYYY-MM-DD'))
    fileContent.push('title: ' + title)
    if (categories?.length > 0) {
      fileContent.push('tags:')
      categories.forEach(category => {
        fileContent.push('  - ' + category)
      })
    }
    fileContent.push('---')
  }
  fileContent.push(content)

  try {
    console.log('Attempting to create new post...')
    octokit.repos.createOrUpdateFileContents({
      owner: 'stephensauceda',
      repo: 'stephensauceda.com',
      message: 'Adding post: ' + title,
      path: 'src/archive/' + fileName + '.md',
      content: btoa(fileContent.join('\n')),
    })

    const response = new Response('post created', {
      status: 201,
    })

    response.headers.set('Location', 'https://stephensauceda.com/archive')

    return response
  } catch (error) {
    console.log(error)
    return new Response(JSON.stringify(error), {
      status: 400,
    })
  }
}
