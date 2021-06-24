const parseCreatedDate = (date) => {
  const dateObject = new Date(date)
  const year = dateObject.getFullYear()
  const month = dateObject.toLocaleString('default', { month: 'long' });
  const day = dateObject.getDate()
  let daySuffix = 'th'
  const dayLastDigit = Number(Array.from(String(day)).pop())
  if (dayLastDigit === 3) daySuffix = 'rd'
  if (dayLastDigit === 2) daySuffix = 'nd'
  if (dayLastDigit === 1) daySuffix = 'st'
  if (day === 13) daySuffix = 'th'
  if (day === 12) daySuffix = 'th'
  if (day === 11) daySuffix = 'th'
  return ` ${month} ${day}${daySuffix}, ${year}`
}

export default parseCreatedDate