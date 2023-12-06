import React from 'react';
import { styled } from "@storybook/theming";
import AvatarImage from './AvatarImage';
import type { Comment } from '../../types';
import parseAdfToHtml from '../../helpers/parseAdfToHtml';

interface CommentSectionProps {
  items?: Comment[]
}

const CommentSection: React.FC<CommentSectionProps> = (props: CommentSectionProps) => {
  
  const CommentSectionTitle = styled.h2({
    margin: '0 0 20px 0',
  })

  const CommentSectionList = styled.ul(({ theme }) => ({
    padding: '10px',
    listStyleType: 'none',
    borderRadius: '5px',
    backgroundColor: theme.background.app,
    marginBottom: '1em'
  }))

  const Comment= styled.li({
    marginBottom: '10px'
  })

  const CommentAuthor = styled.div({
    display: 'flex',
    alignItems: 'center',
    marginBottom: '5px',
    textIndent: '5px'
  })

  const CommentItem = styled.div(({ theme }) => ({
    display: 'flex',
    alignItems: 'flex-start',
    borderRadius: '5px',
    backgroundColor: theme.background.content,
    padding: '5px',
    fontWeight: 300,
    '& div p': {
      margin: 0,
      '& + p': {
        marginTop: '5px'
      }
    }
  }))

  const CommentBody = styled.div({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: '24px'
  })

  const CommentDate = styled.span({
    display: 'block',
    textAlign: 'right',
    width: '100%',
    marginTop: '3px'
  })

  return (
    <CommentSectionList>
      <CommentSectionTitle>Comments</CommentSectionTitle>
      {props.items.map((comment, index) => (
        <Comment key={index}>
          <>
            <CommentAuthor>
              <AvatarImage src={'/avatar?url=' + comment.author.avatar} alt={comment.author.name} className="avatar-comment" />
              {comment.author.name}
            </CommentAuthor>
            <CommentItem key={index}>
            <CommentBody dangerouslySetInnerHTML={{__html: parseAdfToHtml(comment.body)}} />
            </CommentItem>
            <CommentDate>
              { new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeStyle: 'long' }).format(new Date(comment.timeStamps.created))}
            </CommentDate>
          </>
        </Comment>
      ))}
    </CommentSectionList>
  )
}

export default CommentSection
