
import parseOverview from './parseTicketData/parseOverview'
import parseSubtasks from './parseTicketData/parseSubtasks'

const parseTicketData = (data) => {
console.log('🚀 ~ data in parseTicketData', data)
  const dataObject = JSON.parse(data)
  console.log('🚀 ~ dataObject', dataObject)

  const parsedSubtasks = parseSubtasks(dataObject)
  const parsedOverview = parseOverview(dataObject, parsedSubtasks)

  const parsedData = {
    overview: parsedOverview,
    subtasks: parsedSubtasks,
  }
  return parsedData
}

export default parseTicketData