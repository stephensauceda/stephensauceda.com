import React, { Fragment } from 'react'
import Head from 'next/head'
import css from 'styled-jsx/css'
import { getSingle } from '../lib/api'
import Footer from '../components/PageFooter'
import { FONT_FAMILY } from '../lib/constants'

const Index = ({ doc }) => (
  <Fragment>
    <Head>
      <title>Stephen Sauceda</title>
      <meta name="description" content="Builder of web things." />
    </Head>
    <div className="pageWrapper">
      <div className="cardWrapper">
        <div
          className="h-card"
          dangerouslySetInnerHTML={{ __html: doc.data.html_content[0].text }}
        />
      </div>
    </div>
    <div className="footerWrapper">
      <Footer />
    </div>
    <style jsx global>
      {globalStyles}
    </style>
    <style jsx>{styles}</style>
  </Fragment>
)

Index.getInitialProps = async ({ req }) => {
  const home = await getSingle(req, 'homepage')
  return { doc: home.document }
}

const styles = css`
  .pageWrapper {
    height: calc(100vh - 5em);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .cardWrapper,
  .footerWrapper {
    max-width: 500px;
    width: 90%;
    padding: 1em;
    margin: 0 auto;
  }
  .cardWrapper {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const globalStyles = css.global`
  p {
    font-size: 15px;
    line-height: 1.6;
    font-family: ${FONT_FAMILY};
  }
  a {
    color: #e67e22;
  }

  a:visited,
  a:hover {
    color: #d35400;
  }
`

export default Index
