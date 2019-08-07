import React from 'react'
import { withRouter } from 'next/router'
import css from 'styled-jsx/css'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { PAGE_SIZE, FONT_FAMILY, COLORS } from '../lib/constants'
import HyperLink from './HyperLink'

function getEarlierPage(page) {
  return page ? page + 1 : 2
}

function getNewerPage(page) {
  return page - 1
}

const PreviousIcon = () => <Icon icon={faChevronLeft} />
const NextIcon = () => <Icon icon={faChevronRight} />

const NotesPagination = ({ router, resultsLength }) => {
  const page = router.query.page ? parseInt(router.query.page) : null
  const basePath = `${router.pathname}?page=`
  const isFirstPage = !page || page === 1

  return !(isFirstPage && resultsLength < PAGE_SIZE) && (
    <div className="postPagination">
      {isFirstPage ? (
          <span><PreviousIcon /></span>
        ) : (
          <HyperLink className="grey" href={`${basePath}${getNewerPage(page)}`}><PreviousIcon /></HyperLink>
      )}
  
      {resultsLength >= PAGE_SIZE ? (
        <HyperLink className="grey" href={`${basePath}${getEarlierPage(page)}`}><NextIcon /></HyperLink>
      ) : (
        <span><NextIcon /></span>
      )}
      <style jsx global>{globalStyles}</style>
      <style jsx>{styles}</style>
    </div>
  ) || null
}

const styles = css`
  .postPagination {
    display: flex;
  }
  
  span {
    font-family: ${FONT_FAMILY};
    color: ${COLORS.lightGrey}
  }
`

const globalStyles = css.global`
  .postPagination > * {
    padding: 1em;
    flex-grow: 1;
    font-size: 1.25em;
  }

  .postPagination > *:nth-child(2) {
    text-align: right;
  }

  .postPagination a:hover {
    background-color: ${COLORS.lightGrey};
  }
`

export default withRouter(NotesPagination)