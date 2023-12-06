import React from 'react'
import { Placeholder } from '@storybook/components';
import { styled } from "@storybook/theming";
import type { JiraSettings, Overview, SubTasks as SubTaskType } from '../types';
import mapJiraColor from '../helpers/mapJiraColor';
import TicketLink from './overview/TicketLink';
import PropertyBar from './overview/PropertyBar';
import Description from './overview/Description';
import CommentSection from './overview/CommentSection';
import SubTasks from './overview/SubTasks';
import ProgressBar from './ProgressBar';
import { parseToCamelCase } from 'src/helpers/parseCamelCase';
import StatusLabel from './overview/StatusLabel';


interface OverviewProps {
  overviewResults?: Overview; 
  subTasks?: SubTaskType;
  jiraSettings?: JiraSettings;
  fetchData: any;
}

const Overview: React.FC<OverviewProps> = (props: OverviewProps) => {
  
  const OverviewHeader = styled.div({
    display: 'flex',
    flexWrap: 'wrap'
  })

  const OverviewContainer = styled.div({
    textAlign: 'left'
  })

  return (
    <Placeholder>
      <OverviewContainer>
        <OverviewHeader>
          <TicketLink ticketId={props.jiraSettings?.id} summary={props.overviewResults?.summary} />
          <StatusLabel status={props.overviewResults?.status} />
          {props.overviewResults?.subtasksProgress?.length > 0 && <ProgressBar subtasksProgress={props.overviewResults?.subtasksProgress} idsInOrder={props.jiraSettings?.persistentTabs?.map(tab => parseToCamelCase(tab))} />}
          <PropertyBar
              reporter={props.overviewResults?.reporter}
              assignedTo={props.overviewResults?.assignedTo}
              priority={props.overviewResults?.priority}
              created={props.overviewResults?.created}
              lastUpdated={props.overviewResults?.lastUpdated}
            />
        </OverviewHeader>
        {props.overviewResults?.description && <Description descriptionAdfString={props.overviewResults.description} />}
        {props.subTasks?.amount > 0 && <SubTasks subTasks={props.subTasks} />}
        {props.overviewResults?.comments?.amount > 0 && <CommentSection items={props.overviewResults.comments.items} /> }
      </OverviewContainer>
    </Placeholder>
  )
}

export default Overview
