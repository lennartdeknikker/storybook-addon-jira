import React, { Fragment, useEffect, useState } from "react";
import { styled, themes, convert } from "@storybook/theming";
import { TabsState, Placeholder, Button } from "@storybook/components";
import { List } from "./List";
import { useParameter } from '@storybook/api'
import parseCamelCaseToString from '../helpers/parseCamelCaseToString'
import getStatusKeys from "../helpers/getStatusKeys"

export const RequestDataButton = styled(Button)({
  marginTop: "1rem",
});

export const PanelContent = ({ results, fetchData, fetchingState }) => {
  
  const jiraSettings = useParameter('jira', {})
  useEffect(() => fetchData(jiraSettings?.id), [jiraSettings?.id])
  
  const statusKeys = getStatusKeys(results?.subtasks, jiraSettings?.persistentStatusOptions)

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
                <li key={index}>{parseCamelCaseToString(key)}: {results.overview[key]}</li>
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
      
      { statusKeys && statusKeys.map((statusKey, index) => {
        const subtasks = results?.subtasks?.[statusKey]
        const statusLabel = parseCamelCaseToString(statusKey)
        return (
          <div
          key={index}
          id={statusKey}
          title={`${statusLabel} (${subtasks?.length || 0})`}
          >
            {subtasks?.length > 0 ?
            <List items={subtasks} />
            : "There's no subtasks in this category"
            }
          </div>
        )
      })
      }
    </TabsState>
)
}
