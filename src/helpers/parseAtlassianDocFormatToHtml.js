import nmd from 'nano-markdown'

const parseAtlassianDocFormatToHtml = (AdfString) => {
  return nmd(AdfString.replace(/]/g, ')' ).replace(/\|/g,']('))
}

export default parseAtlassianDocFormatToHtml