import React from 'react'
import { node } from 'prop-types'

const PageWrapper = ({ children }) => (
  <div className="flex flex-col justify-center items-center min-h-screen my-0 mx-auto max-w-sms-page-width w-11/12">
    {children}
  </div>
)

PageWrapper.propTypes = {
  children: node.isRequired
}

export default PageWrapper
