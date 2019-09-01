import React, { Fragment } from 'react'
import { oneOf } from 'prop-types'
import css from 'styled-jsx/css'

import { FONT_FAMILY } from '../../lib/constants'

const renderHeading = attrs => {
  switch (attrs.level) {
    case 'h1':
      return <h1 {...attrs} />
    case 'h2':
      return <h2 {...attrs} />
    case 'h3':
      return <h3 {...attrs} />
    case 'h4':
      return <h4 {...attrs} />
    case 'h5':
      return <h5 {...attrs} />
    case 'h6':
      return <h6 {...attrs} />
  }
}

const Heading = props => (
  <Fragment>
    {renderHeading({ ...props, 'data-testid': 'heading' })}
    <style jsx global>
      {styles}
    </style>
  </Fragment>
)

const styles = css.global`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${FONT_FAMILY};
  }

  h3,
  h4,
  h5,
  h6 {
    text-transform: uppercase;
  }
`

Heading.propTypes = {
  level: oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
}

Heading.defaultProps = {
  level: 'h1'
}

export default Heading
