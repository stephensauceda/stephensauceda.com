import React, { Fragment } from 'react'
import css from 'styled-jsx/css'

import { COLORS, FONT_FAMILY } from '../lib/constants'

const HyperLink = props => (
  <Fragment>
    <a {...props} />
    <style jsx>{styles}</style>
  </Fragment>
)

const styles = css`
  a {
    color: ${COLORS.primary};
    text-decoration: none;
    border-bottom: 1px dotted ${COLORS.primary};
    font-family: ${FONT_FAMILY}
  }

  .black {
    color: #000;
    border-bottom: none;
  }

  .black:hover {
    color: ${COLORS.primary};
  }

  .grey {
    color: ${COLORS.secondary};
    border-bottom: none;
  }

  .grey:hover {
    color: #000;
  }
`

export default HyperLink
