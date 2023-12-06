import React from 'react';
import { styled } from "@storybook/theming";
import Icon from './Icon';

interface TicketLinkProps {
  ticketId: string; 
  summary?: string;
  isSubtask?: boolean;
}

const TicketLink: React.FC<TicketLinkProps> = (props: TicketLinkProps) => {
  
  const TicketLink = styled.a(({ theme }) => ({
    color: theme.color.defaultText,
    textDecoration: 'none',
    transition: 'color 0.2s',
    display: 'block',
    ":hover": {
      background: theme.background.hoverable,
    },
  }))

  const TicketTitle = props.isSubtask === true ? styled.p(() => ({
    fontSize: '1rem',
  })) :styled.h1({})

  return (
    <TicketLink href={`${process.env.STORYBOOK_JIRA_BASE_URL}/${props.ticketId}`} target="_blank">
      <TicketTitle>
        <strong>{props.ticketId}{props.summary ? ':' : ''} </strong>{props.summary || ''}
        <Icon icon="link" />
      </TicketTitle>
    </TicketLink>
  )

}

export default TicketLink
