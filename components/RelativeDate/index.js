import React from 'react'
import formatDistance from 'date-fns/formatDistance'

const RelativeDate = ({ date, timeProps = {} }) => (
  <time data-testid="relative-date" {...timeProps}>
    {formatDistance(date, new Date(), { addSuffix: true })}
  </time>
)

export default RelativeDate
