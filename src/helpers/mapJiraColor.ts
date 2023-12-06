const mapJiraColor = (color?: string) => {

  switch (color) {
    case 'green':
    case 'done':
    case 'success':
      return '#00875a'
    case 'inprogress':
      return '#0052cc'
    case 'open':
    case 'ready':
    case 'collectinformation':
    case 'uncategorized':
    case 'default':
      return '#172b4d'
    default:
      return '#172b4d'
  }
}

export default mapJiraColor
