import { RichText } from 'prismic-reactjs'
import title from 'title'
import linkResolver from '../../lib/linkResolver'

export function getFirstImageUrl(note) {
  return note.data.body.find(slice => slice.slice_type === 'image').primary.image.url
}

export function getFirstSentence(note) {
  const s =
    RichText.asText(
      note.data.body.find(slice => slice.slice_type === 'text').primary.text
    ).split('.')[0] + '.'
  console.log(s)
  return s
}

export function getNoteTitle(note) {
  return title(RichText.asText(note.data.title))
}

export function getNoteUrl(note) {
  return linkResolver(note)
}
