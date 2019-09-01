import React from 'react'
import Author from './'
import { render, cleanup } from '@testing-library/react'

afterEach(cleanup)

test('should render my name', () => {
  const { getByText } = render(<Author />)

  expect(getByText('Stephen Sauceda')).not.toBe(null)
})

test('should render my picture', () => {
  const { getByAltText } = render(<Author />)
  const image = getByAltText('A photo of me (Stephen Sauceda)')
  expect(image).not.toBe(null)
  expect(image.src.includes('me.jpg')).toBe(true)
})
