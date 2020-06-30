import React from 'react'
import NextApp from 'next/app'
import 'css/site.css'

class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <div className="pageWrap">
        <Component {...pageProps} />
      </div>
    )
  }
}

export default App
