
import parseOverview from './parseTicketData/parseOverview'
import parseSubtasks from './parseTicketData/parseSubtasks'

const parseTicketData = (data) => {

  const parsedSubtasks = parseSubtasks(data)
  const parsedOverview = parseOverview(data, parsedSubtasks)

  const parsedData = {
    overview: parsedOverview,
    subtasks: parsedSubtasks,
    data: data
  }
  
  return parsedData
}

export default parseTicketData