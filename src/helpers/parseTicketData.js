import parseToCamelCase from './parseToCamelCase'

const parseTicketData = (data) => {
  const parsedData = {
    overview: null,
    subtasks: null,
    data: data
  }

  const parsedSubtasksData = {}

  const getStatusKey = (subTask) => {
    return parseToCamelCase(subTask.fields.status.name.toLowerCase())
  }
  
  const subtasksData = data?.fields?.subtasks
  for (const subTask of subtasksData) {
    const statusKey = getStatusKey(subTask)
    if (!parsedSubtasksData[statusKey]) parsedSubtasksData[statusKey] = []
    parsedSubtasksData[statusKey].push({
      title: subTask.key,
      description: subTask.fields.summary,
      data: subTask
    })
  }

  parsedData.subtasks = parsedSubtasksData

  parsedData.overview = {
    status: data?.fields?.status?.name,
    lastUpdated: new Date(data?.fields?.updated).toDateString(),
    Created: new Date(data?.fields?.created).toDateString(),
    AssignedTo:data?.fields?.assignee.displayName,
    Description: data?.fields?.summary,
    Priority: data?.fields?.priority.name,
  }
  console.log('data parsed to:', parsedData)
  return parsedData
}

export default parseTicketData