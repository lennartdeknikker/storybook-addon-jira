import React, { useEffect } from 'react';
import { themes, convert } from '@storybook/theming';
import { TabsState } from '@storybook/components';
import { useParameter } from '@storybook/api'
import getAllStatusIds from '../helpers/getAllStatusIds'
import List from './List'
import Overview from './Overview'
import { parseCamelCaseToString } from '../helpers/parseCamelCase'

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
      <Overview overviewResults={results.overview} jiraSettings={jiraSettings} fetchData={fetchData} fetchingState={fetchingState} />
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
            <List tabSubtasks={tabSubtasks} />
            : "There's no subtasks in this category"
            }
          </div>
        )
      })
      }
    </TabsState>
)
}
