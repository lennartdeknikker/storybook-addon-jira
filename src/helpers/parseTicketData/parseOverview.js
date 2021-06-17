import getPercentagesFromSubtasks from './parseOverview/getPercentagesFromSubtasks'
import parseComments from './parseOverview/parseComments'

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
    reporter: data?.fields?.reporter?.displayName,
    comments: parseComments(data?.fields?.comment?.comments)
  }
}

export default parseOverview