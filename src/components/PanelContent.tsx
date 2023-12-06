import React, { useEffect } from "react";
import { styled } from "@storybook/theming";
import { Button } from "@storybook/components";
import Overview from './Overview';
import { useParameter } from '@storybook/manager-api';
import type { Results, JiraSettings } from '../types';

export const RequestDataButton = styled(Button)({
  marginTop: "1rem",
});

interface PanelContentProps {
  results: Results;
  fetchData: (id: string) => void;
  clearData: () => void;
}

const Div = styled.div(({ theme }) => ({
  padding: '10px',
  borderRadius: '5px',
  backgroundColor: theme.background.app,
  marginBottom: '1em'
}))

/**
 * Checkout https://github.com/storybookjs/storybook/blob/next/code/addons/jest/src/components/Panel.tsx
 * for a real world example
 */
export const PanelContent: React.FC<PanelContentProps> = ({
  results,
  fetchData,
  clearData,
}) => {

  const jiraSettings: JiraSettings = useParameter('jira', {})
  useEffect(() => fetchData(jiraSettings?.id), [jiraSettings?.id])
  
  return (
    (results.overview.ticketId && jiraSettings?.id) ?
      <Overview overviewResults={results.overview} subTasks={results.subtasks} jiraSettings={jiraSettings} fetchData={fetchData} />
    :
    <Div><p>No JIRA Ticket assigned.</p></Div>
  )
};
