
import parseOverview from './parseTicketData/parseOverview'
import parseSubtasks from './parseTicketData/parseSubtasks'

const parseTicketData = (data) => {

  const parsedSubtasks = parseSubtasks(data)
  const parsedOverview = parseOverview(data, parsedSubtasks)

  const parsedData = {
    overview: parsedOverview,
    subtasks: parsedSubtasks,
  }
  return parsedData
}

export default parseTicketData