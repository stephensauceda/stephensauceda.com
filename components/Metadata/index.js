import React from 'react'
import Head from 'next/head'
import { object } from 'prop-types'
import linkResolver from '../../lib/linkResolver'
import {
  getFirstImageUrl,
  getFirstSentence,
  getNoteTitle
} from '../../lib/helpers/notes'

const Metadata = ({ note }) => {
  const noteTitle = getNoteTitle(note)
  const firstSentence = getFirstSentence(note)
  return (
    <Head>
      <title>{noteTitle} | Stephen Sauceda</title>
      <meta name="description" content={firstSentence} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@stephensauceda" />
      <meta name="twitter:creator" content="@stephensauceda" />
      <meta property="og:title" content={noteTitle} />
      <meta
        property="og:url"
        content={`https://stephensauceda.com${linkResolver(note)}`}
      />
      <meta property="og:image" content={getFirstImageUrl(note)} />
      <meta property="og:description" content={firstSentence} />
      <meta property="og:site_name" content="Stephen Sauceda" />
      <meta property="og:type" content="article" />
    </Head>
  )
}

Metadata.propTypes = {
  note: object.isRequired
}

export default Metadata
