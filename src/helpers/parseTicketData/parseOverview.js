import getPercentagesFromSubtasks from './getPercentagesFromSubtasks'

const parseOverview = (data, parsedSubtasks) => {
  return {
    status: {
      name: data?.fields?.status?.name,
      color: data?.fields?.status?.statusCategory?.colorName,
      percentages: getPercentagesFromSubtasks(parsedSubtasks)
    },
    lastUpdated: new Date(data?.fields?.updated).toDateString(),
    created: new Date(data?.fields?.created).toDateString(),
    assignedTo:data?.fields?.assignee.displayName,
    summary: data?.fields?.summary,
    priority: data?.fields?.priority.name,
    reporter: data?.fields?.reporter?.displayName
  }
}

export default parseOverview