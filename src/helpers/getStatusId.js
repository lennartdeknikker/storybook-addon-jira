import parseToCamelCase from './parseToCamelCase'

const getStatusId = (subTask) => {
  return parseToCamelCase(subTask.fields.status.name.toLowerCase())
}

export default getStatusId