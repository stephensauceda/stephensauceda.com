import React from 'react'
import { render } from '@testing-library/react'

export function createSetupFunction(Component, defaultProps) {
  return function setup(propOverrides) {
    const props = { ...defaultProps, ...propOverrides }
    return render(<Component { ...props } />)
  }
}