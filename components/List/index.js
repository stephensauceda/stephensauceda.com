import React, { Fragment } from 'react'
import { oneOf } from 'prop-types'
import css from 'styled-jsx/css'
import { FONT_FAMILY } from '../../lib/constants'

const List = ({ listType, ...props }) => (
  <Fragment>
    {listType === 'ul' ? <ul {...props} data-testid="list" /> : <ol {...props} data-testid="list" />}
    <style jsx global>
      {styles}
    </style>
  </Fragment>
)

const styles = css.global`
  ul, ol {
    font-family: ${FONT_FAMILY};
  }
`

List.propTypes = {
  listType: oneOf(['ul', 'ol'])
}

List.defaultProps = {
  listType: 'ul'
}

export default List
