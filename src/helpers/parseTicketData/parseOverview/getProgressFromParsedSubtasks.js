const getProgressFromParsedSubtasks = (parsedSubtasks) => {
  const percentages = []
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