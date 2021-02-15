export default function handler(req, res) {
  return fetch(process.env.CONTACT_FORM_ENDPOINT, {
    body: JSON.stringify(req.body),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }).finally(() => res.end())
}
