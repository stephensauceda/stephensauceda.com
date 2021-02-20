/* eslint-disable react/prop-types */
import React, { Fragment, useState } from 'react'
import Head from 'next/head'
import ContactIcons from 'components/ContactIcons'
import ContactForm from 'components/ContactForm'
import { getYear } from 'date-fns'

function Index() {
  const [isFormVisible, setFormVisible] = useState(false)

  const toggleForm = e => {
    e.preventDefault()
    setFormVisible(!isFormVisible)
  }

  return (
    <Fragment>
      <Head>
        <title>Stephen Sauceda</title>
        <meta name="description" content="Builder of web things." />
      </Head>
      <div className="flex flex-col justify-center items-center min-h-screen my-0 mx-auto max-w-sms-page-width w-11/12">
        <main className="h-card flex-grow flex items-center">
          <div className="h-card text-center">
            <p className="mb-4 text-lg md:text-2xl">
              <span className="p-name font-bold">Stephen Sauceda</span>
              <span
                dangerouslySetInnerHTML={{ __html: ' &sol; Software Engineer' }}
              />
            </p>
            <ContactIcons toggleForm={toggleForm} />
          </div>
        </main>
        <div className="w-full">
          <footer className="py-4 text-center">
            <small>
              Copyright &copy; {`${getYear(Date.now())}`}{' '}
              <a href="/" className="black">
                Stephen Sauceda
              </a>
            </small>
          </footer>
        </div>
        {isFormVisible && <ContactForm onClose={toggleForm} />}
      </div>
    </Fragment>
  )
}

export default Index
