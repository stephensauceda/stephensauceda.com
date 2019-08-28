import React from 'react'
import Heading from './'
import { render, cleanup } from '@testing-library/react'

afterEach(cleanup)

test('should render children', () => {
  const { getByText } = render(<Heading>My heading.</Heading>)
  expect(getByText('My heading.')).not.toBeNull()
})

test('should render an h1', () => {
  const { getByTestId } = render(<Heading>My heading.</Heading>)
  const heading = getByTestId('heading')
  expect(heading.tagName).toBe('H1')
})

test('should render the passed in level', () => {
  const { getByTestId } = render(<Heading level="h4">My heading.</Heading>)
  const heading = getByTestId('heading')
  expect(heading.tagName).toBe('H4')
})
