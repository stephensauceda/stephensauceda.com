import React from 'react'
import { Elements } from 'prismic-reactjs'
import Paragraph from '../components/Paragraph'
import HyperLink from '../components/HyperLink';
import Heading from '../components/Heading';
import List from '../components/List'
import linkResolver from '../lib/linkResolver'

export default function htmlSerializer(type, element, content, children, key) {
  let props = { key, children }
  switch (type) {
    case Elements.paragraph:
      return <Paragraph {...props} />
    case Elements.hyperlink:
      return <HyperLink {...props} href={element.data.url || linkResolver(element.data)} />
    case Elements.heading1:
      return <Heading {...props} level="h1" />
    case Elements.heading2:
      return <Heading {...props} level="h2" />
    case Elements.heading3:
      return <Heading {...props} level="h3" />
    case Elements.heading4:
      return <Heading {...props} level="h4" />
    case Elements.heading5:
      return <Heading {...props} level="h5" />
    case Elements.heading6:
      return <Heading {...props} level="h6" />
    case Elements.list:
      return <List {...props} listType="ul" />
    case Elements.oList:
      return <List {...props} listType="ol" />
    default:
      return null
  }
}