import React, { Fragment } from 'react'
import getYear from 'date-fns/getYear'

const PageFooter = () => (
  <Fragment>
    <footer className="py-4">
      <small>
        Copyright &copy; {`${getYear(Date.now())}`}{' '}
        <a href="/" className="black">
          Stephen Sauceda
        </a>
      </small>
    </footer>
  </Fragment>
)

export default PageFooter
