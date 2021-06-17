const parseCamelCaseToString = (string) => {
  const withSpaces = string.replace(/([a-z0-9])([A-Z])/g, '$1 $2')
  const lowerCased = withSpaces.toLowerCase()
  const withFirstLetterCapitalized = lowerCased.charAt(0).toUpperCase() + lowerCased.slice(1);
  return withFirstLetterCapitalized
}

// https://gist.github.com/Jagathishrex/f4b57d77a093b7a5614db0f95c5e5060

// util function to convert the input to string type

const parseToCamelCase = (input) => {
  const convertToString = (input) => {  
    if(input) { 
      if(typeof input === "string") {
        return input
      }
      return String(input)
    }
    return ''
  }

  const toWords = (input) => {							
    input = convertToString(input)
    var regex = /[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])|\d+/g
    return input.match(regex)
  }

  // convert the input array to camel case
  const toCamelCase = (inputArray) => {
    let result = ""
    for(let i = 0; i < inputArray.length; i++) {
      let currentStr = inputArray[i]
      let tempStr = currentStr.toLowerCase()
      if(i != 0) {
        // convert first letter to upper case (the word is in lowercase) 
          tempStr = tempStr.substr(0, 1).toUpperCase() + tempStr.substr(1)
      }
      result +=tempStr
    }
    return result
  }

  let words = toWords(input)
  return toCamelCase(words)
}

export { parseCamelCaseToString, parseToCamelCase }