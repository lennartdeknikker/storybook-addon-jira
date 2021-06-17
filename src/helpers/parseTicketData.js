import getStatusId from './getStatusId'

const parseTicketData = (data) => {

  // create subtasks object
  const subtasks = {
    amount: 0,
    categories: {}
  }

  // calculate total amount of subtasks
  subtasks.amount = data?.fields?.subtasks.length

  for (const subTask of data?.fields?.subtasks) {
    // pull status from subtask and parse to statusId
    const StatusId = getStatusId(subTask)

    // use statusId to create the category if it does not exist yet.
    if (!subtasks.categories[StatusId]) subtasks.categories[StatusId] = {
      amount: 0,
      percentage: 0,
      items: []
    }

    // update amount of subtasks for this status category
    subtasks.categories[StatusId].amount++

    // recalculate category percentage of total amount of subtasks
    subtasks.categories[StatusId].percentage = (100 / subtasks.amount) * subtasks.categories[StatusId].amount

    // add subtask to category
    subtasks.categories[StatusId].items.push({
      title: subTask.key,
      description: subTask.fields.summary,
      data: subTask
    })
  }

  const getPercentagesFromSubtasks = () => {
    const percentages = []
    for (let item in subtasks.categories) {
      percentages.push({
        id: item,
        percentage: subtasks.categories[item].percentage
      })
    }
    return percentages
  }

  const overview = {
    status: {
      name: data?.fields?.status?.name,
      color: data?.fields?.status?.statusCategory?.colorName,
      percentages: getPercentagesFromSubtasks()
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