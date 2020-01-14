import { parse, format, formatDistance } from 'date-fns'

export function parseDateString(dateString, formatString = `yyyy-MM-dd'T'HH:mm:ssxx`) {
  return parse(dateString, formatString, new Date(dateString))
}

export function formatDateString(dateString, formatString = 'MM.dd.yy') {
  return format(parseDateString(dateString), formatString)
}

export function formatRelativeDateString(dateString) {
  return formatDistance(parseDateString(dateString), new Date(), { addSuffix: true })
}
