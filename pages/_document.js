import React, { Fragment } from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Fragment>
        <html>
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

            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta httpEquiv="Content-Language" content="en" />
            <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
            <link
              rel="stylesheet"
              href="https://unpkg.com/normalize.css@8.0.0/normalize.css"
            />
            <link
              rel="webmention"
              href="https://webmention.io/stephensauceda.com/webmention"
            />
            <link rel="pingback" href="https://webmention.io/stephensauceda.com/xmlrpc" />
          </Head>
          <body>
            <Main />
            <NextScript />
            <script
              dangerouslySetInnerHTML={{
                __html: `
              window.prismic = {
                endpoint: 'https://stephensauceda.cdn.prismic.io/api/v2'
              }`
              }}
            />
            <script
              type="text/javascript"
              src="https://static.cdn.prismic.io/prismic.min.js"
            />
          </body>
        </html>
      </Fragment>
    )
  }
}
