export async function onRequestPost({ request }) {
  const { h, name, content } = await request.json()
  console.log({ name, content })
  const response = new Response('post created', {
    status: 201,
  })

  response.headers.set('Location', 'https://stephensauceda.com/archive')

  return response
}
