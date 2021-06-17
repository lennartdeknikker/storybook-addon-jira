import parseToCamelCase from './parseToCamelCase'

const getStatusKey = (subTask) => {
  return parseToCamelCase(subTask.fields.status.name.toLowerCase())
}

export default getStatusKey