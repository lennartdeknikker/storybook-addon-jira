const parseCamelCaseToString = (string) => {
  const withSpaces = string.replace(/([a-z0-9])([A-Z])/g, '$1 $2')
  const lowerCased = withSpaces.toLowerCase()
  const withFirstLetterCapitalized = lowerCased.charAt(0).toUpperCase() + lowerCased.slice(1);
  return withFirstLetterCapitalized
}

export default parseCamelCaseToString