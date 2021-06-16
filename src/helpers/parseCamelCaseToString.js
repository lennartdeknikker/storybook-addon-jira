const parseCamelCaseToString = (string) => string.replace(/([a-z0-9])([A-Z])/g, '$1 $2')

export default parseCamelCaseToString