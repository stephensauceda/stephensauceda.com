import { RichText } from 'prismic-reactjs'
import title from 'title'
import linkResolver from '../../lib/linkResolver'

export function getFirstImageUrl(note) {
  return note.body.find(slice => slice.type === 'image').primary.image.url
}

export function getFirstSentence(note) {
  const s =
    RichText.asText(note.body.find(slice => slice.type === 'text').primary.text).split(
      '.'
    )[0] + '.'
  return s
}

export function getNoteTitle(note) {
  return title(RichText.asText(note.title))
}

export function getNoteUrl(note) {
  return linkResolver(note._meta)
}
