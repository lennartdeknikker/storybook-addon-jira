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
  return groupedOnStatus
}

export default sortData