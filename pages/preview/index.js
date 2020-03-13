/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import Head from 'next/head'
import Router, { withRouter } from 'next/router'
import linkResolver from '../../lib/linkResolver'
import { client } from '../../lib/api'

class Preview extends Component {
  componentDidMount() {
    this.preview()
  }

  preview = async () => {
    client
      .previewSession(this.props.router.query.token, linkResolver)
      .then(url => {
        Router.push(url)
      })
  }

  render() {
    return (
      <div>
        <Head>
          <meta name="robots" content="noindex, follow" />
        </Head>
        <p>Loading preview...</p>
      </div>
    )
  }
}

export default withRouter(Preview)
