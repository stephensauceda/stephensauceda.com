import { RichText } from 'prismic-reactjs'

export function getFirstImageUrl(postSlices) {
  return postSlices.find(slice => slice.slice_type === 'image').primary.image.url
}

export function getFirstSentence(postSlices) {
  return RichText.asText(postSlices.find(slice => slice.slice_type === 'text').primary.text).split('.')[0] + '.'
}