import React from 'react'
import List from './'
import { render, cleanup } from '@testing-library/react'

afterEach(cleanup)

test('should render children', () => {
  const { getByText } = render(
    <List>
      <li>my list</li>
    </List>
  )
  expect(getByText('my list')).not.toBeNull()
})

test('should render the listType', () => {
  const { getByTestId } = render(
    <List listType="ol">
      <li>my list</li>
    </List>
  )
  expect(getByTestId('list').tagName).toBe('OL')
})
