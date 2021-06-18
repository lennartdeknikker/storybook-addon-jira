import React, { Fragment } from 'react';
import { Placeholder, Button } from '@storybook/components';
import { styled, themes, convert } from "@storybook/theming";
import { parseCamelCaseToString } from '../helpers/parseCamelCase'
import ProgressBar from './ProgressBar';
import { Icons } from "@storybook/components";

export const RequestDataButton = styled(Button)({
  marginTop: '1rem',
});

const Icon = styled(Icons)({
  height: '12px',
  width: '12px',
  marginLeft: '5px',
  alignSelf: "center",
  display: "inline-flex",
});

const Overview = ({overviewResults, jiraSettings, fetchData, fetchingState}) => {
  const TicketLink = styled.a({
    color: convert(themes.normal).color.dark,
    textDecoration: 'none',
    ":hover": {
      color: convert(themes.normal).color.darkest,
    }
  })

  const TicketTitle = styled.h1({
    fontSize: '1.2rem',
    marginBottom: '15px'
  })

  const OverviewContainer = styled.div({
    textAlign: 'left'
  })
  
  return (
    <Placeholder>
      <OverviewContainer>
        {jiraSettings?.id ?
          <TicketLink href={`${process.env.STORYBOOK_JIRA_BASE_URL}/${jiraSettings.id}`} target="_blank">
            <TicketTitle>
              <strong>{jiraSettings.id}: </strong>{overviewResults.summary || ''}
              <Icon icon="link" />
            </TicketTitle>
          </TicketLink>
        : <p>
            There's no tickets registered for this component.
          </p>
      }
      {overviewResults.subtasksProgress &&
        <ProgressBar subtasksProgress={overviewResults.subtasksProgress} />
      }
      <ul>
        {Object.keys(overviewResults).map((key, index) =>
          typeof overviewResults[key] === 'string' ?
          <li key={index}>{parseCamelCaseToString(key)}: {overviewResults[key]}</li>
          : <li key={index}>{key}</li>
        )}
      </ul>
      {jiraSettings?.id &&
        <RequestDataButton
        secondary
        small
        onClick={() =>  fetchData(jiraSettings?.id)}
        style={{ marginRight: 16 }}
        >
          {fetchingState 
            ? 'Fetching...'
            : 'Refresh'
          }                
        </RequestDataButton>
      }
      </OverviewContainer>
    </Placeholder>
  )
}

export default Overview