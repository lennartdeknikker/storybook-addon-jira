import parseToCamelCase from "../helpers/parseToCamelCase";

  const getStatusKeys = (subtasks, persistentStatusOptions) => {
    if (subtasks && persistentStatusOptions) {
      const labels = Object.keys(subtasks)
      for (const option of persistentStatusOptions) {
        labels.push(parseToCamelCase(option))
      }
      return [...new Set(labels)]
    }
    return null
  }

  export default getStatusKeys