/* eslint-disable react/prop-types */
import React, { Fragment } from 'react'
import Head from 'next/head'
import { formatDateString } from '../../lib/helpers/date'
import { getNoteTitle } from '../../lib/helpers/notes'
import { getPosts } from '../../lib/api'
import { PAGE_SIZE } from '../../lib/constants'
import linkResolver from '../../lib/linkResolver'
import PageWrapper from '../../components/PageWrapper'
import Footer from '../../components/PageFooter'

const Notes = ({ notes }) => (
  <Fragment>
    <Head>
      <title>Notes | Stephen Sauceda</title>
      <meta
        name="description"
        content="Some things written by Stephen Sauceda."
      />
    </Head>
    <PageWrapper>
      <main className="flex-grow flex flex-col pt-20">
        {notes.map(n => (
          <h2 key={n.id} className="flex mb-4">
            <span className="mr-2">
              {formatDateString(n.first_publication_date)}
            </span>
            <a className="black" href={linkResolver(n)}>
              {getNoteTitle(n)}
            </a>
          </h2>
        ))}
      </main>
      <div className="w-full">
        <Footer />
      </div>
    </PageWrapper>
  </Fragment>
)

export async function getStaticProps() {
  const notes = await getPosts([], {
    orderings: '[document.first_publication_date desc]',
    fetch: ['post.title'],
    pageSize: PAGE_SIZE
  })
  return { props: { notes } }
}

export default Notes
