const getPercentagesFromSubtasks = (subtasks) => {
  const percentages = []
  for (let item in subtasks.categories) {
    percentages.push({
      id: item,
      percentage: subtasks.categories[item].percentage
    })
  }
  return percentages
}

export default getPercentagesFromSubtasks