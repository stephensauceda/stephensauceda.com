/* eslint-disable react/prop-types */
import React, { Fragment } from 'react'
import Error from 'next/error'
import css from 'styled-jsx/css'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import Heading from '../../components/Heading'
import RelativeDate from '../../components/RelativeDate'
import PageFooter from '../../components/PageFooter'
import renderSlices from '../../lib/renderSlices'
import Paragraph from '../../components/Paragraph'
import HyperLink from '../../components/HyperLink'
import Author from '../../components/Author'
import Metadata from '../../components/Metadata'
import { getNoteTitle, getNoteUrl } from '../../lib/helpers/notes'

import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { withApollo } from '../../lib/apollo'

import Loading from '../../components/Loading'

const QUERY = gql`
  query post($uid: String!) {
    post(uid: $uid, lang: "en-us") {
      title
      body {
        ... on PostBodyText {
          type
          label
          primary {
            text
          }
        }
        ... on PostBodyImage {
          type
          label
          primary {
            image
            caption
          }
        }
        ... on PostBodyGist {
          type
          label
          primary {
            gist
          }
        }
        ... on PostBodyQuote {
          type
          label
          primary {
            quote
            source_quote
          }
        }
        ... on PostBodyEmbed {
          type
          label
          primary {
            embed
          }
        }
      }
      _meta {
        uid
        firstPublicationDate
        type
      }
    }
  }
`

const renderPost = data => {
  const note = data.post
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
                date={note._meta.firstPublicationDate}
                timeProps={{
                  className: 'dt-published'
                }}
              />
            </HyperLink>
          </small>
        </Paragraph>
        <div className="e-content">{renderSlices(note.body)}</div>
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

const ShowNotes = () => {
  const router = useRouter()
  const { data, loading, error } = useQuery(QUERY, {
    variables: { uid: router.query.n }
  })

  return (
    <Fragment>
      {loading && (
        <div className="loadingWrap">
          <Loading />
          <style jsx>{`
            .loadingWrap {
              height: 100vh;
              width: 100vw;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          `}</style>
        </div>
      )}
      {error && <pre>Something went wrong.</pre>}
      {!loading && !data && <Error statusCode={404} />}
      {!loading && data && renderPost(data)}
    </Fragment>
  )
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

export default withApollo(ShowNotes)
