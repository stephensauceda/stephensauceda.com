import React, { Fragment } from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Fragment>
        <Html lang="en">
          <Head>
            {process.env.NODE_ENV === 'production' && (
              <Fragment>
                <script
                  async
                  src="https://www.googletagmanager.com/gtag/js?id=UA-15647519-1"
                />
                <script
                  dangerouslySetInnerHTML={{
                    __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments)}
                      gtag('js', new Date());

                      gtag('config', 'UA-15647519-1');
                    `
                  }}
                />
              </Fragment>
            )}

            <meta httpEquiv="Content-Language" content="en" />
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
            <link
              rel="webmention"
              href="https://webmention.io/stephensauceda.com/webmention"
            />
            <link
              rel="pingback"
              href="https://webmention.io/stephensauceda.com/xmlrpc"
            />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      </Fragment>
    )
  }
}
