/* eslint-disable react/prop-types */
import React, { Fragment } from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5'

function ContactForm({ onClose }) {
  const [message, setMessage] = React.useState('')
  const [inputs, setInputs] = React.useState({
    email: '',
    message: ''
  })

  const handleOnChange = e => {
    e.persist()
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(inputs)
    })
      .then(() => {
        setInputs({
          email: '',
          message: ''
        })

        setMessage('I got your message! Thanks!')
      })
      .catch(err => setMessage(err.message))
  }

  const disabled = !inputs.message || !inputs.email

  return (
    <Fragment>
      <div className="absolute z-10 w-full min-h-screen bg-white flex flex-col">
        <a
          href="#"
          onClick={onClose}
          className="absolute top-0 right-0 text-3xl p-4"
        >
          <IoCloseCircleOutline />
        </a>
        <div className="p-4 flex-grow flex flex-col justify-center">
          <p>
            <strong>Get in touch.</strong>
          </p>
          <form onSubmit={handleSubmit} className="mb-4">
            <div className="mb-4">
              <input
                id="email"
                type="email"
                name="_replyto"
                placeholder="you@email.com"
                className="block w-full border-b border-gray-500"
                onChange={handleOnChange}
                value={inputs.email}
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                id="message"
                name="message"
                placeholder="Hi there, Stephen. How are you?"
                className="block w-full border-b border-gray-500"
                onChange={handleOnChange}
                value={inputs.message}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={disabled}
              className="border border-gray-500 px-2 py-1"
            >
              Send it!
            </button>
          </form>
          {message && <p>{message}</p>}
        </div>
      </div>
    </Fragment>
  )
}
export default ContactForm
