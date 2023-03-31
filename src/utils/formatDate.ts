// format date to Month DD, YYYY

export const formatDate = (date: string) => {
  const newDate = new Date(date)
  const month = newDate.toLocaleString('default', { month: 'long' })
  const day = newDate.getDate()
  const year = newDate.getFullYear()

  return `${month} ${day}, ${year}`
}
