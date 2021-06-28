
import parseOverview from './parseTicketData/parseOverview'
import parseSubtasks from './parseTicketData/parseSubtasks'

const parseTicketData = (data) => {
  const dataObject = typeof data === 'string' ? JSON.parse(data) : data

  const parsedSubtasks = parseSubtasks(dataObject)
  const parsedOverview = parseOverview(dataObject, parsedSubtasks)

  const parsedData = {
    overview: parsedOverview,
    subtasks: parsedSubtasks,
  }
  return parsedData
}

export default parseTicketData