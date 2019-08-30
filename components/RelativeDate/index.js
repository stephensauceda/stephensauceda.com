import React from 'react'
import { formatRelativeDateString } from '../../lib/helpers/date'

const RelativeDate = ({ date, timeProps = {} }) => (
  <time data-testid="relative-date" dateTime={date} {...timeProps}>
    {formatRelativeDateString(date)}
  </time>
)

export default RelativeDate
