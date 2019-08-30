import React from 'react'
import { render } from '@testing-library/react'
import RelativeTime from './'

test('should render a time element', () => {
  const { getByTestId } = render(<RelativeTime date="2019-07-03T03:32:04+0000" />)
  const el = getByTestId('relative-date')
  expect(el).not.toBeNull()
  expect(el.tagName).toBe('TIME')
})