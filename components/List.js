import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import { FONT_FAMILY } from '../lib/constants'

const List = ({ listType, ...props }) => (
  <Fragment>
    {listType === 'ul' ? <ul {...props} /> : <ol {...props} />}
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

export default List
