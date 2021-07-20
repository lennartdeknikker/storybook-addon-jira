import { parseToCamelCase } from "./parseCamelCase";

  const getAllStatusIds = (subtasksCategories, persistentCategories) => {
  console.log('🚀 ~ subtasksCategories', subtasksCategories)
  console.log('🚀 ~ persistentCategories', persistentCategories)
    if (subtasksCategories && persistentCategories) {
      const labels =persistentCategories.map(category => parseToCamelCase(category))
      const newLabels = Object.keys(subtasksCategories)
      for (const newLabel of newLabels) {
        if (!labels.includes(newLabel)) labels.push(newLabel)
      }
      console.log('🚀 ~ labels', labels)
      return labels
    }
    return null
  }

  export default getAllStatusIds