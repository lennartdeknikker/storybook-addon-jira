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

  useEffect(() =>{
    console.log(results)
  }, [results])

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
                  <a href={`${process.env.STORYBOOK_JIRA_BASE_URL}/${value.id}`}> {value.id}</a>
                </p>
              : <p>
                  There's no tickets registered for this component.
                </p>  
            }
            <p>
              <ul>
                {Object.keys(results.data).map(key => 
                  <li>{parseCamelCase(key)}: {results.data[key]}</li>
                )}
              </ul>
            </p>
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
      {results.toDo.length > 0 &&
        <div
        id="toDo"
        title={`To do (${results.toDo.length})`}
        >
          <List items={results.toDo} />
        </div>
      }
      {results.toDo.inProgress > 0 &&
        <div
          id="inProgress"
          title={`In progress (${results.inProgress.length})`}
        >
          <List items={results.inProgress} />
        </div>
      }
      {results.readyForTest.length > 0 &&
        <div
          id="readyForTest"
          title={`Ready for test (${results.readyForTest.length})`}
        >
          <List items={results.readyForTest} />
        </div>
      }
      {results.done.length > 0 &&
        <div
          id="done"
          title={`Done (${results.done.length})`}
        >
          <List items={results.done} />
        </div>
      }
    </TabsState>
)
}
