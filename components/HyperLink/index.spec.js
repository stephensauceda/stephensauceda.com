import React from 'react'
import HyperLink from './'
import { render, cleanup } from '@testing-library/react'

afterEach(cleanup)

test('should render children', () => {
  const { getByText } = render(<HyperLink href="/">My link.</HyperLink>)
  expect(getByText('My link.')).not.toBeNull()
})

test('should render an a tag', () => {
  const { getByTestId } = render(<HyperLink href="/">My link.</HyperLink>)
  expect(getByTestId('link').tagName).toBe('A')
})
