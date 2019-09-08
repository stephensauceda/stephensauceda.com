/* eslint-disable react/prop-types */
import React, { Fragment } from 'react'
import Head from 'next/head'
import css from 'styled-jsx/css'
import { RichText } from 'prismic-reactjs'
import { formatDateString } from '../../lib/helpers/date'
import linkResolver from '../../lib/linkResolver'
import Footer from '../../components/PageFooter'
import Heading from '../../components/Heading'
import HyperLink from '../../components/HyperLink'
import NotesPagination from '../../components/NotesPagination'
import Loading from '../../components/Loading'

import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { withApollo } from '../../lib/apollo'

const QUERY = gql`
  query {
    allPosts(sortBy: meta_firstPublicationDate_DESC) {
      edges {
        node {
          title
          _meta {
            uid
            type
            firstPublicationDate
          }
        }
      }
    }
  }
`

const Notes = () => {
  const { data, loading, error } = useQuery(QUERY)
  return (
    <Fragment>
      <Head>
        <title>Notes | Stephen Sauceda</title>
        <meta name="description" content="Some things written by Stephen Sauceda." />
      </Head>
      <div className="pageWrapper">
        <div className="cardWrapper">
          {loading && <Loading />}
          {error && <pre>Something went wrong.</pre>}
          {data && (
            <Fragment>
              {data.allPosts.edges.map(n => (
                <Heading key={n.node._meta.uid} level="h2">
                  <span>{formatDateString(n.node._meta.firstPublicationDate)}</span>
                  <HyperLink
                    className="black"
                    href="/notes/[n]"
                    as={linkResolver(n.node._meta)}
                  >
                    {RichText.asText(n.node.title)}
                  </HyperLink>
                </Heading>
              ))}
              <NotesPagination resultsLength={data.allPosts.edges.length} />
            </Fragment>
          )}
        </div>
      </div>
      <div className="footerWrapper">
        <Footer />
      </div>
      <style jsx>{styles}</style>
    </Fragment>
  )
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

export default withApollo(Notes)
