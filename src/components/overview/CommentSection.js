import React from 'react';
import { styled, themes, convert } from "@storybook/theming";
import AvatarImage from './AvatarImage';
import parseAdfToHtml from '../../helpers/parseAdfToHtml'
import parseCreatedDate from '../../helpers/parseCreatedDate';

const CommentSection = ({ items }) => {
  const CommentSectionTitle = styled.h2({
    fontSize: '1em',
    fontWeight: 700
  })

  const CommentSectionList = styled.ul({
    padding: '10px',
    listStyleType: 'none',
    borderRadius: '5px',
    backgroundColor: convert(themes.normal).color.light,
  })

  const Comment= styled.li({
    marginBottom: '10px'
  })

  const CommentAuthor = styled.div({
    display: 'flex',
    alignItems: 'center',
    marginBottom: '5px'
  })

  const CommentItem = styled.div({
    display: 'flex',
    alignItems: 'flex-start',
    borderRadius: '5px',
    backgroundColor: convert(themes.normal).color.lightest,
    padding: '5px',
    fontWeight: 300,
    '& div p': {
      margin: 0,
      '& + p': {
        marginTop: '5px'
      }
    }
  })

  const CommentBody = styled.div({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: '24px'
  })

  const CommentDate = styled.span({
    fontSize: '0.5rem',
    display: 'block',
    textAlign: 'right',
    width: '100%',
    marginTop: '3px'
  })

  return (
    <>
      <CommentSectionTitle>
        Comments
      </CommentSectionTitle>
      <CommentSectionList>
        {items.map((comment, index) => (
          <Comment key={index}>
            <>
              <CommentAuthor>
                <AvatarImage src={comment.author.avatar} alt={comment.author.name} className="avatar-comment" />
                {comment.author.name}
              </CommentAuthor>
              <CommentItem key={index}>
                <CommentBody dangerouslySetInnerHTML={{__html: parseAdfToHtml(comment.body)}} />
              </CommentItem>
              <CommentDate>
                {parseCreatedDate(comment.timeStamps.created)}
              </CommentDate>
            </>
          </Comment>
        ))}
      </CommentSectionList>
    </>
  )
}

export default CommentSection