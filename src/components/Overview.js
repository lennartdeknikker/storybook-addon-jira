import React from 'react';
import { Placeholder } from '@storybook/components';
import { styled } from "@storybook/theming";
import ProgressBar from './ProgressBar';
import mapJiraColor from '../helpers/mapJiraColor';
import CommentSection from './overview/CommentSection';
import PropertyBar from './overview/PropertyBar';
import TicketLink from './overview/TicketLink';
import Descript from './overview/Descript';

export const RequestDataButton = styled.button({
  marginTop: '1rem',
});

const Overview = ({overviewResults, jiraSettings, fetchData, fetchingState}) => {

  const OverviewHeader = styled.div({
    display: 'flex',
    flexWrap: 'wrap'
  })

  const OverviewContainer = styled.div({
    textAlign: 'left'
  })

  const StatusLabel = styled.span({
    display: 'block',
    padding: '10px',
    fontSize: '.5rem',
    backgroundColor: mapJiraColor(overviewResults?.status?.color),
    color: 'white',
    width: 'fit-content',
    borderRadius: '5px',
    height: 'fit-content',
    margin: '0 0 10px 10px'
  })

  return (
    <Placeholder>
      <OverviewContainer>
        <OverviewHeader>
          <TicketLink ticketId={jiraSettings.id} summary={overviewResults.summary} />
          <StatusLabel>{overviewResults?.status?.label || '...'}</StatusLabel>
          {overviewResults?.subtasksProgress?.length > 0 && <ProgressBar subtasksProgress={overviewResults.subtasksProgress} />}
          <PropertyBar
            fetchId={jiraSettings.id}
            fetchData={fetchData}
            fetchingState={fetchingState}
            reporter={overviewResults?.reporter}
            assignedTo={overviewResults?.assignedTo}
            priority={overviewResults.priority}
            created={overviewResults.created}
            lastUpdated={overviewResults.lastUpdated}
          />
        </OverviewHeader>
        {overviewResults?.description && <Descript descriptionAdfString={overviewResults?.description} /> }
        {overviewResults?.comments?.items?.length > 0 && <CommentSection {...overviewResults.comments} /> }
      </OverviewContainer>
    </Placeholder>
  )
}

export default Overview