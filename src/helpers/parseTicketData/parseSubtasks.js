import { parseToCamelCase } from '../parseCamelCase'

const parseSubtasks = (data) => {
  // create subtasks object
  const parsedSubtasks = {
    amount: 0,
    categories: {}
  }

  // calculate total amount of subtasks
  parsedSubtasks.amount = data?.fields?.subtasks.length

  for (const subtask of data?.fields?.subtasks) {
    // pull status from subtask and parse to statusId
    const statusId = parseToCamelCase(subtask.fields.status.name)

    // use statusId to create the category if it does not exist yet.
    if (!parsedSubtasks.categories[statusId]) parsedSubtasks.categories[statusId] = {
      color: subtask.fields.status.statusCategory.colorName,
      amount: 0,
      items: []
    }

    // update amount of subtasks for this status category
    parsedSubtasks.categories[statusId].amount++
    
    // add subtask to category
    parsedSubtasks.categories[statusId].items.push({
      id: subtask.key,
      summary: subtask.fields.summary,
      data: subtask
    })
  }
    
  return parsedSubtasks
}

export default parseSubtasks