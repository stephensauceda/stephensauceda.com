import React from 'react'
import { string, object } from 'prop-types'
import { formatRelativeDateString } from '../../lib/helpers/date'

const RelativeDate = ({ date, timeProps = {} }) => (
  <time data-testid="relative-date" dateTime={date} {...timeProps}>
    {formatRelativeDateString(date)}
  </time>
)

RelativeDate.propTypes = {
  date: string.isRequired,
  timeProps: object
}

export default RelativeDate
