import React from 'react'
import parse from 'date-fns/parse'
import distanceInWords from 'date-fns/distance_in_words'

const RelativeDate = ({ date, timeProps = {} }) => (
  <time {...timeProps}>
    {distanceInWords(new Date(), parse(date), { addSuffix: true })}
  </time>
)

export default RelativeDate
