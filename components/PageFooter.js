import React, { Fragment } from 'react'
import getYear from 'date-fns/get_year'
import { FONT_FAMILY } from '../lib/constants'
import HyperLink from './HyperLink'

const PageFooter = () => (
  <Fragment>
    <footer>
      <small>
        Copyright &copy; {`${getYear(Date.now())}`}{' '}
        <HyperLink href="/" className="black">
          Stephen Sauceda
        </HyperLink>
      </small>
    </footer>
    <style jsx>{`
      footer {
        padding: 1em 0;
        font-family: ${FONT_FAMILY};
      }
    `}</style>
  </Fragment>
)

export default PageFooter
