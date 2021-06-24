import React from 'react';
import { styled, themes, convert } from "@storybook/theming";
import Icon from './Icon';

const TicketLink = ({ ticketId, summary, fontSize }) => {
  
  const TicketLinkContainer = styled.div({
    flex: 1,
  })

  const TicketLink = styled.a({
    color: convert(themes.normal).color.dark,
    textDecoration: 'none',
    transition: 'color 0.2s',
    display: 'block',
    width: 'fit-content',
    ":hover": {
      color: convert(themes.normal).color.darkest,
    }
  })

  const TicketTitle = styled.h1({
    fontSize: fontSize || '1.2rem',
    display: 'block',
    width: 'fit-content'
  })

  return (
    <TicketLinkContainer>
      <TicketLink href={`${process.env.STORYBOOK_JIRA_BASE_URL}/${ticketId}`} target="_blank">
        <TicketTitle>
          <strong>{ticketId}{summary ? ':' : ''} </strong>{summary || ''}
          <Icon icon="link" />
        </TicketTitle>
      </TicketLink>
    </TicketLinkContainer>
  )

}

export default TicketLink