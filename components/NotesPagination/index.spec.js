import Pagination from './'
import { cleanup } from '@testing-library/react'
import { createSetupFunction } from '../../jest/helpers'

const setup = createSetupFunction(Pagination, {
  router: {
    query: {
      page: undefined,
      pathname: '/notes'
    }
  },
  resultsLength: 10
})

afterEach(cleanup)


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
