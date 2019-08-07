import React, { Fragment } from 'react'
import css from 'styled-jsx/css'

import { FONT_FAMILY } from '../lib/constants'

const Paragraph = props => (
  <Fragment>
    <p {...props} />
    <style jsx>{styles}</style>
  </Fragment>
)

const styles = css`
  p {
    font-family: ${FONT_FAMILY};
    font-size: 15px;
    line-height: 1.6;
  }
`

export default Paragraph
