import React from 'react'
import Paragraph from '../Paragraph'
import { render, cleanup } from '@testing-library/react'

afterEach(cleanup)

test('should render children', () => {
  const { getByText } = render(<Paragraph>My paragraph.</Paragraph>)

  expect(getByText('My paragraph.')).not.toBeNull()
})
