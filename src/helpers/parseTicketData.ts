
import parseOverview from './parseTicketData/parseOverview'
import parseSubtasks from './parseTicketData/parseSubtasks'
import type { Overview, Results, SubTasks } from '../types';

const parseTicketData = function(data: string): Results {
  const dataObject = typeof data === 'string' ? JSON.parse(data) : data
  const parsedSubtasks: SubTasks = parseSubtasks(dataObject)
  const parsedOverview: Overview = parseOverview(dataObject, parsedSubtasks)

  const parsedData: Results = {
    overview: parsedOverview,
    subtasks: parsedSubtasks,
  }
  return parsedData
};

export default parseTicketData
