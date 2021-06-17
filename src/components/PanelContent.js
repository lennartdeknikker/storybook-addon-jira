import React, { Fragment, useEffect } from 'react';
import { styled, themes, convert } from '@storybook/theming';
import { TabsState, Placeholder, Button } from '@storybook/components';
import { useParameter } from '@storybook/api'
import getAllStatusIds from '../helpers/getAllStatusIds'
import List from './List'
import parseCamelCaseToString from '../helpers/parseCamelCaseToString'

export const RequestDataButton = styled(Button)({
  marginTop: '1rem',
});

export const PanelContent = ({ results, fetchData, fetchingState }) => {
  
  const jiraSettings = useParameter('jira', {})
  useEffect(() => fetchData(jiraSettings?.id), [jiraSettings?.id])
  
  const statusIds = getAllStatusIds(results?.subtasks.categories, jiraSettings?.persistentTabs)

  return (
    <TabsState
      initial="overview"
      backgroundColor={convert(themes.normal).background.hoverable}
    >
      <div
        id="overview"
        title="Overview"
        color={convert(themes.normal).color.positive}
      >
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
              {Object.keys(results.overview).map((key, index) =>
                typeof results.overview[key] === 'string' ?
                <li key={index}>{parseCamelCaseToString(key)}: {results.overview[key]}</li>
                : <li key={index}>{key}</li>
              )}
            </ul>
          </Fragment>
          {jiraSettings?.id &&
            <Fragment>
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
            </Fragment>
          }
        </Placeholder>
      </div>
      
      { statusIds && statusIds.map((statusId, index) => {
        const tabSubtasks = results?.subtasks?.categories?.[statusId]?.items
        const tabLabel = parseCamelCaseToString(statusId)
        return (
          <div
          key={`${index}`}
          id={statusId}
          title={`${tabLabel} (${tabSubtasks?.length || 0})`}
          >
            {tabSubtasks?.length > 0 ?
            <List items={tabSubtasks} />
            : "There's no subtasks in this category"
            }
          </div>
        )
      })
      }
    </TabsState>
)
}
