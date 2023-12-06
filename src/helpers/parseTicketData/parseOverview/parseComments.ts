import { Comments } from "src/types";

const parseComments = (commentData: any) => {
  const parsedComments: Comments = {
    amount: 0,
    items: [],
  }

  for (let comment of commentData) {
    parsedComments.items.push({
      author: {
        name: comment?.author?.displayName,
        avatar: comment?.author?.avatarUrls['48x48']
      },
      body: comment.body,
      timeStamps: {
        created: new Date(comment.created),
        updated: new Date(comment.updated)
      }
    })
  }
  parsedComments.items.reverse()
  return parsedComments
}

export default parseComments
