import React from 'react'
import PageFooter from './'
import { render, cleanup } from '@testing-library/react'

afterEach(cleanup)

test('should render my name', () => {
  const { getByText } = render(<PageFooter />)
  expect(getByText('Stephen Sauceda')).not.toBeNull()
})
