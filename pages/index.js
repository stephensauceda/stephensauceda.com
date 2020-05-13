/* eslint-disable react/prop-types */
import React, { Fragment } from 'react'
import Head from 'next/head'
import { getSingle } from 'lib/api'
import PageWrapper from 'components/PageWrapper'
import Footer from 'components/PageFooter'

const Index = ({ doc }) => (
  <Fragment>
    <Head>
      <title>Stephen Sauceda</title>
      <meta name="description" content="Builder of web things." />
    </Head>
    <PageWrapper>
      <main
        className="h-card flex-grow flex items-center"
        dangerouslySetInnerHTML={{ __html: doc.data.html_content[0].text }}
      />

      <div className="w-full">
        <Footer />
      </div>
    </PageWrapper>
  </Fragment>
)

export async function getStaticProps() {
  const home = await getSingle('homepage')
  return { props: { doc: home.document } }
}

export default Index
