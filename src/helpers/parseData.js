const parseData = (data) => {
  const parsedData = {
    overview: null,
    subtasks: null,
    data: data
  }

  const parsedSubtasksData = {
    toDo: [],
    inProgress: [],
    readyForTest: [],
    done:[]
  }
  
  const subtasksData = data?.fields?.subtasks
  for (const subTask of subtasksData) {
    parsedSubtasksData[subTask.fields.status.name.toLowerCase()].push({
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

export default parseData