import React, { Fragment } from 'react';
import { Placeholder, Button } from '@storybook/components';
import { styled } from '@storybook/theming';
import { parseCamelCaseToString } from '../helpers/parseCamelCase'

export const RequestDataButton = styled(Button)({
  marginTop: '1rem',
});


const Overview = ({overviewResults, jiraSettings, fetchData, fetchingState}) => {
  return (
    <Placeholder>
      <Fragment>
        {jiraSettings?.id
        ? <p>Main ticket:
            <a href={`${process.env.STORYBOOK_JIRA_BASE_URL}/${jiraSettings.id}`} target="_blank"> {jiraSettings.id}</a>
          </p>
        : <p>
            There's no tickets registered for this component.
          </p>  
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
      </Fragment>
    </Placeholder>
  )
}

export default Overview