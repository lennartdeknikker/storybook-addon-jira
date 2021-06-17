import getStatusKey from './getStatusKey'

const parseTicketData = (data) => {

  const subtasks = {
    amount: 0
  }
  for (const subTask of data?.fields?.subtasks) {
    subtasks.amount++
    const statusKey = getStatusKey(subTask)
    if (!subtasks[statusKey]) subtasks[statusKey] = []
    subtasks[statusKey].push({
      title: subTask.key,
      description: subTask.fields.summary,
      data: subTask
    })
  }

  const getPercentages = () => {
    const percentages = {}
    for (let statusKey in subtasks) {
      if (!percentages[statusKey]) percentages[statusKey] = {
        amount: subtasks[statusKey].length
      }
      percentages[statusKey].percentage = (100 / subtasks.amount) * percentages[statusKey].amount
    }
    return percentages
  }

  subtasks.percentages = getPercentages()

  const overview = {
    status: {
      name: data?.fields?.status?.name,
      color: data?.fields?.status?.statusCategory?.colorName,
      percentages: [
        
      ]
    },
    lastUpdated: new Date(data?.fields?.updated).toDateString(),
    created: new Date(data?.fields?.created).toDateString(),
    assignedTo:data?.fields?.assignee.displayName,
    summary: data?.fields?.summary,
    priority: data?.fields?.priority.name,
    reporter: data?.fields?.reporter?.displayName
  }

  const parsedData = {
    overview: overview,
    subtasks: subtasks,
    data: data
  }
  console.log('data parsed to:', parsedData)
  return parsedData
}

export default parseTicketData