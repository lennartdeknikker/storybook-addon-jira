import React, { Fragment, useEffect, useState } from "react";
import { styled, themes, convert } from "@storybook/theming";
import { TabsState, Placeholder, Button } from "@storybook/components";
import { List } from "./List";
import { useParameter } from '@storybook/api'
import parseCamelCaseToString from '../helpers/parseCamelCaseToString'
import parseToCamelCase from "../helpers/parseToCamelCase";

export const RequestDataButton = styled(Button)({
  marginTop: "1rem",
});

export const PanelContent = ({ results, fetchData, fetchingState }) => {
  
  const jiraSettings = useParameter('jira', {})
  console.log(jiraSettings.statusOptions)

  useEffect(() => fetchData(jiraSettings?.id), [jiraSettings?.id])
  
  const getStatusLabels = (subtasks, persistentStatusOptions) => {
    if (subtasks && persistentStatusOptions) {
      const labels = Object.keys(subtasks)
      for (const option of persistentStatusOptions) {
        labels.push(parseToCamelCase(option))
      }
      return [...new Set(labels)]
    }
    return null
  }
  const statusLabels = getStatusLabels(results?.subtasks, jiraSettings?.statusOptions)
  console.log('🚀 ~ statusLabels', statusLabels)

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
      
      {/* { statusLabels.map(statusLabel => {
        const subtasks = results?.subtasks?.[statusLabel]
        return (
          <div
          id={statusLabel}
          title={`${statusLabel} (${subtasks?.length || 0})`}
          >
            {subtasks?.length > 0 ?
            <List items={subtasks} />
            : "There's no subtasks in this category"
            }
          </div>
        )
      })

      } */}
      <div
      id="toDo"
      title={`To do (${results?.subtasks?.toDo?.length || 0})`}
      >
        {results?.subtasks?.toDo?.length > 0 ?
        <List items={results.subtasks.toDo} />
        : "There's no subtasks in this category"
        }
      </div>
      <div
        id="inProgress"
        title={`In progress (${results?.subtasks?.inProgress?.length || 0})`}
        >
        {results?.subtasks?.inProgress?.length > 0 ?
        <List items={results.subtasks.inProgress} />
        : "There's no subtasks in this category"
        }
      </div>
      <div
        id="readyForTest"
        title={`Ready for test (${results?.subtasks?.readyForTest?.length || 0})`}
        >
        {results?.subtasks?.readyForTest?.length > 0 ?
        <List items={results.subtasks.readyForTest} />
        : "There's no subtasks in this category"
        }
      </div>
      <div
        id="done"
        title={`Done (${results?.subtasks?.done?.length || 0})`}
        >
        {results?.subtasks?.done?.length > 0 ?
        <List items={results.subtasks.done} />
        : "There's no subtasks in this category"
        }
      </div>
    </TabsState>
)
}
