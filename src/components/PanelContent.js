import React, { Fragment, useEffect, useState } from "react";
import { styled, themes, convert } from "@storybook/theming";
import { TabsState, Placeholder, Button } from "@storybook/components";
import { List } from "./List";
import { useParameter } from '@storybook/api'
import parseCamelCase from '../helpers/parseCamelCase'

export const RequestDataButton = styled(Button)({
  marginTop: "1rem",
});

export const PanelContent = ({ results, fetchData, fetchingState }) => {
  const value = useParameter('jira', null)

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
            {value?.id
              ? <p>Main ticket:
                  <a href={`${process.env.STORYBOOK_JIRA_BASE_URL}/${value.id}`} target="_blank"> {value.id}</a>
                </p>
              : <p>
                  There's no tickets registered for this component.
                </p>  
            }
            <ul>
              {Object.keys(results.overview).map((key, index) => 
                <li key={index}>{parseCamelCase(key)}: {results.overview[key]}</li>
              )}
            </ul>
          </Fragment>
          {value?.id &&
            <Fragment>
              <RequestDataButton
                secondary
                small
                onClick={() =>  fetchData(value?.id)}
                style={{ marginRight: 16 }}
              >
                {fetchingState 
                  ? 'Fetching...'
                  : 'Fetch details & subtasks'
                }                
              </RequestDataButton>
            </Fragment>
          }
        </Placeholder>
      </div>
      {results?.subtasks?.toDo?.length > 0 &&
        <div
        id="toDo"
        title={`To do (${results.subtasks.toDo.length})`}
        >
          <List items={results.subtasks.toDo} />
        </div>
      }
      {results?.subtasks?.inProgress?.length > 0 &&
        <div
          id="inProgress"
          title={`In progress (${results.subtasks.inProgress.length})`}
        >
          <List items={results.subtasks.inProgress} />
        </div>
      }
      {results?.subtasks?.readyForTest?.length > 0 &&
        <div
          id="readyForTest"
          title={`Ready for test (${results.subtasks.readyForTest.length})`}
        >
          <List items={results.subtasks.readyForTest} />
        </div>
      }
      {results?.subtasks?.done?.length > 0 &&
        <div
          id="done"
          title={`Done (${results.subtasks.done.length})`}
        >
          <List items={results.subtasks.done} />
        </div>
      }
    </TabsState>
)
}
