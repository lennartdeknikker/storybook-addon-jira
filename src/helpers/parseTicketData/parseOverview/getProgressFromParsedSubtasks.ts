import type { SubTasks, SubtaskProgress } from '../../../types';

const getProgressFromParsedSubtasks = (parsedSubtasks: SubTasks) => {
  const percentages: SubtaskProgress[] = []
  for (let statusId in parsedSubtasks.categories) {
    percentages.push({
      id: statusId,
      percentage: (100 / parsedSubtasks.amount) * parsedSubtasks.categories[statusId].amount,
      color: parsedSubtasks.categories[statusId].color
    })
  }
  return percentages
}

export default getProgressFromParsedSubtasks
