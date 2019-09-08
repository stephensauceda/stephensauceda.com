import React, { Fragment } from 'react'
import Link from 'next/link'
import css from 'styled-jsx/css'

import { COLORS, FONT_FAMILY } from '../../lib/constants'

function isInternalLink(href) {
  return href.startsWith('/')
}

const InternalLink = ({ href, as, ...props }) => (
  <Fragment>
    <Link href={href} as={as}>
      <a {...props} data-testid="link" />
    </Link>
    <style jsx>{styles}</style>
  </Fragment>
)

const ExternalLink = props => (
  <Fragment>
    <a {...props} data-testid="link" />
    <style jsx>{styles}</style>
  </Fragment>
)

const HyperLink = props =>
  isInternalLink(props.href) ? <InternalLink {...props} /> : <ExternalLink {...props} />

const styles = css`
  a {
    color: ${COLORS.primary};
    text-decoration: none;
    border-bottom: 1px dotted ${COLORS.primary};
    font-family: ${FONT_FAMILY};
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
