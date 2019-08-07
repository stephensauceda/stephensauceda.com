export default function linkResolver(doc) {
  switch (doc.type) {
    case 'post':
      return `/notes/${doc.uid}`
  
    default:
      return `/`
  }
}