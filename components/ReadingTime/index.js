import React from 'react'
import { number } from 'prop-types'

const ReadingTime = ({ wordCount }) => {
  const numberOfMinutesToRead = Math.ceil(wordCount / 250)

  return (
    <span>{`${numberOfMinutesToRead} minute${
      numberOfMinutesToRead > 1 ? 's' : ''
    }`}</span>
  )
}

ReadingTime.propTypes = { wordCount: number.isRequired }

export default ReadingTime
