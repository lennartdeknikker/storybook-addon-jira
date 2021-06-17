const parseComments = (commentData) => {
  const parsedComments = {
    amount: commentData.length,
    items: []
  }
  for (let comment of commentData) {
    parsedComments.items.push({
      author: comment.author.displayName,
      body: comment.body,
      timeStamps: {
        created: new Date(comment.created),
        updated: new Date(comment.updated)
      }
    })
  }
  return parsedComments
}

export default parseComments