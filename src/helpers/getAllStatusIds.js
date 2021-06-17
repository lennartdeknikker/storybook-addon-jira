import parseToCamelCase from "./parseToCamelCase";

  const getAllStatusIds = (subtasksCategories, persistentCategories) => {
    if (subtasksCategories && persistentCategories) {
      const labels = Object.keys(subtasksCategories)
      for (const category of persistentCategories) {
        labels.push(parseToCamelCase(category))
      }
      return [...new Set(labels)].reverse()
    }
    return null
  }

  export default getAllStatusIds