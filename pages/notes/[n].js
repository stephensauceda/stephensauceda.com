/* eslint-disable react/prop-types */
import React, { Fragment } from 'react'
import Error from 'next/error'
import { getByUID, getPosts } from 'lib/api'
import RelativeDate from 'components/RelativeDate'
import PageFooter from 'components/PageFooter'
import renderSlices from 'lib/renderSlices'
import PageWrapper from 'components/PageWrapper'
import Author from 'components/Author'
import Metadata from 'components/Metadata'
import ReadingTime from 'components/ReadingTime'
import {
  getNoteTitle,
  getNoteUrl,
  getTextSlices,
  combineTextSlices
} from 'lib/helpers/notes'

function getWordCount(note) {
  const text = combineTextSlices(getTextSlices(note))
  return text.match(/\w+/g).length
}

function ShowNotes({ note }) {
  if (note) {
    const postTitle = getNoteTitle(note)
    const postUrl = getNoteUrl(note)
    return (
      <Fragment>
        <Metadata note={note} />
        <PageWrapper>
          <main className="pt-20">
            <article className="Note h-entry">
              <h1 className="p-name">{postTitle}</h1>
              <p>
                <small>
                  <a className="grey u-url" href={postUrl}>
                    <RelativeDate
                      date={note.first_publication_date}
                      timeProps={{
                        className: 'dt-published'
                      }}
                    />
                  </a>
                </small>{' '}
                -{' '}
                <small>
                  <ReadingTime wordCount={getWordCount(note.data.body)} />
                </small>
              </p>
              <div className="e-content">{renderSlices(note.data.body)}</div>
              <footer>
                <Author />
              </footer>
            </article>
            <div className="w-full">
              <PageFooter />
            </div>
          </main>
        </PageWrapper>
      </Fragment>
    )
  }

  return <Error statusCode={404} />
}

export async function getStaticProps({ params }) {
  const note = await getByUID(params.n)
  return {
    props: { note }
  }
}

export async function getStaticPaths() {
  const notes = await getPosts()
  const paths = notes.map(n => ({ params: { n: n.uid } }))
  return { paths, fallback: true }
}

export default ShowNotes
