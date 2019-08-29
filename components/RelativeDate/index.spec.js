import React from 'react'
import { render } from '@testing-library/react'
import RelativeTime from './'

test('should render a time element', () => {
  const { getByTestId } = render(<RelativeTime date={Date.now()} />)
  const el = getByTestId('relative-date')
  expect(el).not.toBeNull()
  expect(el.tagName).toBe('TIME')
})