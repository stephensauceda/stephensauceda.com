import React from 'react'

const Author = () => (
  <div className="py-4 flex items-center">
    <img
      src="/me.jpg"
      alt="A photo of me (Stephen Sauceda)"
      className="u-photo w-auto rounded-full mr-2"
      width={50}
      height={50}
      loading="lazy"
    />
    <a rel="author" className="black p-autho h-card" href="/">
      <strong>
        <small>Stephen Sauceda</small>
      </strong>
    </a>
  </div>
)

export default Author
