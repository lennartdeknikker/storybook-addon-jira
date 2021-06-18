const parseAtlassianDocFormatToMarkDown = (AdfString) => {
  return AdfString.replace(/]/g, ')' ).replace(/\|/g,'](')
}

export default parseAtlassianDocFormatToMarkDown