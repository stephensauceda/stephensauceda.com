import React from 'react'
import css from 'styled-jsx/css'
import HyperLink from './HyperLink'
import clsx from 'clsx'
import { FONT_FAMILY } from '../lib/constants'

const Author = () => (
  <div>
    <img
      src="/static/me.jpg"
      alt="A photo of me (Stephen Sauceda)"
      className="u-photo"
      width={50}
      height={50}
    />
    <HyperLink rel="author" className={clsx('black', 'p-author', 'h-card')} href="/">
      <strong><small>Stephen Sauceda</small></strong>
    </HyperLink>
    <style jsx>{styles}</style>
  </div>
)

const styles = css`
  div {
    padding: 1em 0;
    font-family: ${FONT_FAMILY};
    display: flex;
    align-items: center;
  }

  img {
    width: auto;
    border-radius: 50%;
    display: inline-block;
    margin-right: 0.5em;
  }
`

export default Author
