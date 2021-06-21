import nmd from 'nano-markdown'

const parseAdfToHtml = (AdfString) => {
  const withParsedLinks = AdfString.replace(/]/g, ')' ).replace(/\|/g,'](')
  return nmd(withParsedLinks)
}

export default parseAdfToHtml