import React from 'react'
import Pagination from './'
import { render, cleanup } from '@testing-library/react'

afterEach(cleanup)

const setup = propOverrides => {
  const defaultProps = {
    router: {
      query: {
        page: undefined,
        pathname: '/notes'
      }
    },
    resultsLength: 10
  }

  const props = {
    ...defaultProps,
    ...propOverrides
  }

  return render(<Pagination {...props} />)
}

test('should render a next page link', () => {
  const { getByTitle } = setup()
  expect(getByTitle('Next page')).not.toBeNull()
})

test('should not render a next page link when the are fewer results than the PAGE_SIZE', () => {
  const { queryByTitle } = setup()
  expect(queryByTitle('Next page')).not.toBeNull()
})

test('should render a previous page link when on page 2 or greater', () => {
  const { getByTitle } = setup({ router: { query: { page: 2 } } } )
  expect(getByTitle('Previous page')).not.toBeNull()
})

test('should not render a previous page link when on the first page', () => {
  const { queryByTitle } = setup()
  expect(queryByTitle('Previous Page')).toBeNull()
})
