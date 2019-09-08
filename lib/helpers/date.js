import { format, formatDistance, parseISO } from 'date-fns'

export function formatDateString(dateString, formatString = 'MM.dd.yy') {
  return format(parseISO(dateString), formatString)
}

export function formatRelativeDateString(dateString) {
  return formatDistance(parseISO(dateString), new Date(), { addSuffix: true })
}
