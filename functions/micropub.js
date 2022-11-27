export async function onRequestPost({ request }) {
  const data = await request.json()
  console.log({ data })
  const response = new Response('post created', {
    status: 201,
  })

  response.headers.set('Location', 'https://stephensauceda.com/archive')

  return response
}
