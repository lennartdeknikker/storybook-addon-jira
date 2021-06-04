const sortData = (data) => {
  const subTasks = data?.fields?.subtasks
  const groupedOnStatus = {
    toDo: [],
    inProgress: [],
    readyForTest: [],
    done:[]
  }
  for (const subTask of subTasks) {
    groupedOnStatus[subTask.fields.status.name.toLowerCase()].push({
      title: subTask.key,
      description: subTask.fields.summary,
      data: subTask
    })
  }
  groupedOnStatus.data = {
    status: data?.fields?.status?.name,
    lastUpdated: new Date(data?.fields?.updated).toDateString(),
    Created: new Date(data?.fields?.created).toDateString(),
    AssignedTo:data?.fields?.assignee.displayName,
    Description: data?.fields?.summary,
    Priority: data?.fields?.priority.name,
  }
  groupedOnStatus.remainingData = data
  return groupedOnStatus
}

export default sortData