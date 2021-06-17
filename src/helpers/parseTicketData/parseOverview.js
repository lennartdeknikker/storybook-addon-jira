import getProgressFromParsedSubtasks from './parseOverview/getProgressFromParsedSubtasks'
import parseComments from './parseOverview/parseComments'

const parseOverview = (data, parsedSubtasks) => {
  return {
    ticketId: data?.fields?.key,
    status: {
      label: data?.fields?.status?.name,
      color: data?.fields?.status?.statusCategory?.colorName,
    },
    subtasksProgress: getProgressFromParsedSubtasks(parsedSubtasks),
    lastUpdated: new Date(data?.fields?.updated).toDateString(),
    created: new Date(data?.fields?.created).toDateString(),
    assignedTo:data?.fields?.assignee.displayName,
    summary: data?.fields?.summary,
    description: data?.fields?.description,
    priority: data?.fields?.priority.name,
    reporter: data?.fields?.reporter?.displayName,
    comments: parseComments(data?.fields?.comment?.comments)
  }
}

export default parseOverview