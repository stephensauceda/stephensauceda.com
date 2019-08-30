import React, { Fragment } from 'react'
import Head from 'next/head'
import css from 'styled-jsx/css'
import { RichText } from 'prismic-reactjs'
import parse from 'date-fns/parse'
import format from 'date-fns/format'
import { getPosts } from '../../lib/api'
import { PAGE_SIZE } from '../../lib/constants'
import linkResolver from '../../lib/linkResolver'
import Footer from '../../components/PageFooter'
import Heading from '../../components/Heading'
import HyperLink from '../../components/HyperLink'
import NotesPagination from '../../components/NotesPagination'

const Notes = ({ notes }) => (
  <Fragment>
    <Head>
      <title>Notes | Stephen Sauceda</title>
      <meta name="description" content="Some things written by Stephen Sauceda." />
    </Head>
    <div className="pageWrapper">
      <div className="cardWrapper">
        {notes.map(n => (
          <Heading key={n.id} level="h2">
            <span>{format(parse(n.first_publication_date), 'MM.DD.YY')}</span>
            <HyperLink className="black" href={linkResolver(n)}>
              {RichText.asText(n.data.title)}
            </HyperLink>
          </Heading>
        ))}

        <NotesPagination resultsLength={notes.length} />
      </div>
    </div>
    <div className="footerWrapper">
      <Footer />
    </div>
    <style jsx>{styles}</style>
  </Fragment>
)

Notes.getInitialProps = async ({ req, query }) => {
  const notes = await getPosts(req, [], {
    orderings: '[document.first_publication_date desc]',
    fetch: ['post.title'],
    pageSize: PAGE_SIZE,
    page: query.page || 1
  })
  return { notes }
}

const styles = css`
  .pageWrapper {
    min-height: calc(100vh - 10em);
    padding-top: 5em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .cardWrapper,
  .footerWrapper {
    max-width: 500px;
    width: 90%;
    padding: 1em;
    margin: 0 auto;
  }
  span {
    margin-right: 0.5em;
  }
`

export default Notes
