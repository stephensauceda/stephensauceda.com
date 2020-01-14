/* eslint-disable react/prop-types */
import React, { Fragment } from 'react'
import Error from 'next/error'
import css from 'styled-jsx/css'
import clsx from 'clsx'
import { getByUID } from '../../lib/api'
import Heading from '../../components/Heading'
import RelativeDate from '../../components/RelativeDate'
import PageFooter from '../../components/PageFooter'
import renderSlices from '../../lib/renderSlices'
import Paragraph from '../../components/Paragraph'
import HyperLink from '../../components/HyperLink'
import Author from '../../components/Author'
import Metadata from '../../components/Metadata'
import { getNoteTitle, getNoteUrl } from '../../lib/helpers/notes'

const ShowNotes = ({ note }) => {
  if (note) {
    const postTitle = getNoteTitle(note)
    const postUrl = getNoteUrl(note)
    return (
      <Fragment>
        <Metadata note={note} />
        <article className="Note h-entry">
          <Heading level="h1" className="p-name">
            {postTitle}
          </Heading>
          <Paragraph>
            <small>
              <HyperLink className={clsx('grey', 'u-url')} href={postUrl}>
                <RelativeDate
                  date={note.first_publication_date}
                  timeProps={{
                    className: 'dt-published'
                  }}
                />
              </HyperLink>
            </small>
          </Paragraph>
          <div className="e-content">{renderSlices(note.data.body)}</div>
          <footer>
            <Author />
          </footer>
        </article>
        <div className="footerWrap">
          <PageFooter />
        </div>
        <style jsx global>
          {globalStyles}
        </style>
        <style jsx>{styles}</style>
      </Fragment>
    )
  }

  return <Error statusCode={404} />
}

ShowNotes.getInitialProps = async ({ req, query }) => {
  const note = await getByUID(req, query.n)
  return { note }
}

const styles = css`
  .Note,
  .footerWrap {
    width: 90%;
    max-width: 500px;
    margin: 0 auto;
  }

  .Note {
    padding-top: 5em;
    padding-bottom: 5em;
  }
`

const globalStyles = css.global`
  img {
    width: 100%;
  }
`

export default ShowNotes
