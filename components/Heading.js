import React, { Fragment } from 'react'
import css from 'styled-jsx/css'

import { FONT_FAMILY } from '../lib/constants'

const renderHeading = props => {
  switch (props.level) {
    case 'h1':
      return <h1 {...props} />
    case 'h2':
      return <h2 {...props} />
    case 'h3':
      return <h3 {...props} />
    case 'h4':
      return <h4 {...props} />
    case 'h5':
      return <h5 {...props} />
    case 'h6':
      return <h6 {...props} />
  }
}

const Heading = props => {
  return (
    <Fragment>
      {renderHeading(props)}
      <style jsx global>
        {styles}
      </style>
    </Fragment>
  )
}

const styles = css.global`
  h1, h2, h3, h4, h5, h6 {
    font-family: ${FONT_FAMILY}
  }

  h3, h4, h5, h6 {
    text-transform: uppercase;
  }
`

export default Heading
