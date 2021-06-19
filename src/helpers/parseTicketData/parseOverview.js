import getProgressFromParsedSubtasks from './parseOverview/getProgressFromParsedSubtasks'
import parseComments from './parseOverview/parseComments'

const parseOverview = (data, parsedSubtasks) => {
  return {
    ticketId: data?.key,
    status: {
      label: data?.fields?.status?.name,
      color: data?.fields?.status?.statusCategory?.colorName,
    },
    subtasksProgress: getProgressFromParsedSubtasks(parsedSubtasks),
    lastUpdated: new Date(data?.fields?.updated).toDateString(),
    created: new Date(data?.fields?.created).toDateString(),
    assignedTo: {
      name: data?.fields?.assignee.displayName,
      avatar: data?.fields?.assignee?.avatarUrls['48x48']
    },
    summary: data?.fields?.summary,
    description: data?.fields?.description,
    priority: {
      label: data?.fields?.priority.name,
      icon: data?.fields?.priority.iconUrl
    },
    reporter: {
      name: data?.fields?.reporter?.displayName,
      avatar: data?.fields?.reporter?.avatarUrls['48x48']
    },
    comments: parseComments(data?.fields?.comment?.comments)
  }
}

export default parseOverview