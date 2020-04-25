import React from 'react'

const PageWrapper = ({ children }) => (
  <div className="flex flex-col justify-center items-center min-h-screen my-0 mx-auto max-w-sms w-11/12">
    {children}
  </div>
)

export default PageWrapper
