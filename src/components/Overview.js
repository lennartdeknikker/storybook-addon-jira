import React from 'react';
import { Placeholder } from '@storybook/components';
import { styled, themes, convert } from "@storybook/theming";
import parseAdfToHtml from '../helpers/parseAdfToHtml'
import ProgressBar from './ProgressBar';
import { Icons } from "@storybook/components";
import mapJiraColor from '../helpers/mapJiraColor';
import parseCreatedDate from '../helpers/parseCreatedDate';
import CommentSection from './overview/CommentSection';
import AvatarImage from './overview/AvatarImage';

export const RequestDataButton = styled.button({
  marginTop: '1rem',
});

const Icon = styled(Icons)({
  height: '12px',
  width: '12px',
  marginLeft: '5px',
  alignSelf: "center",
  display: "inline-flex",
  "&.icon-refresh": {
    marginLeft: 0,
    "@keyframes rotate": {
      from: {
        transform: "rotate(0)"
      },
      to: {
        transform: "rotate(360deg)"
      }
    },
    "&.icon-refreshing": {
      marginLeft: 0,
      animation: '1s infinite alternate rotate'
    }
  }
});


const Overview = ({overviewResults, jiraSettings, fetchData, fetchingState}) => {

  const OverviewHeader = styled.div({
    display: 'flex',
    flexWrap: 'wrap'
  })

  const TicketLink = styled.a({
    color: convert(themes.normal).color.dark,
    textDecoration: 'none',
    flex: 1,
    transition: 'color 0.2s',
    ":hover": {
      color: convert(themes.normal).color.darkest,
    }
  })

  const TicketTitle = styled.h1({
    fontSize: '1.2rem',
    marginBottom: '15px'
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

  const Description = styled.p({
    display: 'block',
    fontWeight: 300,
    marginTop: 0,
    a: {
      color: '#0052cc',
      textDecoration: 'none'
    },
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: convert(themes.normal).color.light
  })

  const descriptionAdfString = overviewResults?.description || ''
  const descriptionHtmlString = parseAdfToHtml(descriptionAdfString)
  const PropertyBar = styled.div({
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
  })

  const HeaderItem = styled.div({
    display: 'flex',
    alignItems: 'center',
    width: 'fit-content',
    margin: '10px 20px 10px 0',
    "&:last-of-type": {
      flex: 1,
      justifyContent: 'flex-end'
    }
  })

  const HeaderItemValue = styled.span({
    fontWeight: 300,
    textIndent: '5px'
  })

  const parseUpdatedDate = (date) => {
    const lastUpdated = new Date(date)
    const currentDate = new Date()
    const differenceInSeconds = currentDate - lastUpdated
    const differenceInDays = Math.floor(differenceInSeconds / (1000 * 3600 * 24))
    const suffix = differenceInDays === 1 ? 'day' : 'days'
    return ` ${differenceInDays} ${suffix} ago`
  }

  const RefreshButton = styled.button(({ theme }) => ({
    border: 0,
    borderRadius: '3em',
    cursor: 'pointer',
    display: 'inline-block',
    overflow: 'hidden',
    padding: '3px 8px',
    transition: 'all 150ms ease-out',
    verticalAlign: 'top',
    userSelect: 'none',
    margin: 0,
  
    backgroundColor: theme.base === 'light' ? '#EAF3FC' : theme.color.border,
    boxShadow:
      theme.base === 'light'
        ? `${theme.color.border} 0 0 0 1px inset`
        : `${theme.color.darker}  0 0 0 1px inset`,
    color: theme.color.secondary,
  
    '&:hover': {
      background: '#EAF3FC',
    },
  
    '&:focus': {
      boxShadow: `${theme.color.secondary} 0 0 0 1px inset`,
      outline: 'none',
    },
  
    svg: {
      display: 'block',
      height: 14,
      width: 14,
    },
  }));

  return (
    <Placeholder>
      <OverviewContainer>
        <OverviewHeader>
          <TicketLink href={`${process.env.STORYBOOK_JIRA_BASE_URL}/${jiraSettings.id}`} target="_blank">
            <TicketTitle>
              <strong>{jiraSettings.id}{overviewResults?.summary ? ':' : ''} </strong>{overviewResults?.summary || ''}
              <Icon icon="link" />
            </TicketTitle>
          </TicketLink>
          <StatusLabel>{overviewResults?.status?.label || '...'}</StatusLabel>
          {overviewResults?.subtasksProgress?.length > 0 && <ProgressBar subtasksProgress={overviewResults.subtasksProgress} />}
          <PropertyBar>
            <HeaderItem>
              Reporter:
              { overviewResults?.reporter ?
                overviewResults?.reporter?.avatar ?
                  <AvatarImage src={overviewResults.reporter.avatar} alt={overviewResults.reporter?.name} />
                  : <HeaderItemValue>{overviewResults?.reporter?.name}</HeaderItemValue>
                : <HeaderItemValue>...</HeaderItemValue>
              }
            </HeaderItem>
            <HeaderItem>
              Assigned to:
              {overviewResults?.assignedTo ? 
                overviewResults.assignedTo?.avatar ?
                  <AvatarImage src={overviewResults.assignedTo.avatar} alt={overviewResults.assignedTo?.name} />
                  : <HeaderItemValue>{overviewResults?.assignedTo?.name || 'not assigned yet'}</HeaderItemValue>
                : <HeaderItemValue>...</HeaderItemValue>
              }
            </HeaderItem>
            <HeaderItem>
              Priority:
              {overviewResults?.priority ?
                overviewResults.priority?.label === 'Medium' ?
                  <HeaderItemValue>-</HeaderItemValue>
                :
                  <AvatarImage src={overviewResults?.priority?.icon} alt={overviewResults?.priority?.label} className="avatar-priority" />
              : <HeaderItemValue>...</HeaderItemValue>
              }
            </HeaderItem>
            <HeaderItem>
              Created on:
              <HeaderItemValue>
                { overviewResults?.created ?
                parseCreatedDate(overviewResults.created)
              : '...'}
              </HeaderItemValue>
            </HeaderItem>
            <HeaderItem>
              Last updated: 
              <HeaderItemValue>
                { overviewResults?.lastUpdated ?
                parseUpdatedDate(overviewResults?.lastUpdated) 
              : '...' }
              </HeaderItemValue>
            </HeaderItem>
            <HeaderItem>
              <RefreshButton
                title="Refresh"
                onClick={() =>  fetchData(jiraSettings?.id)}
                >
                <Icon icon="sync" className={`icon-refresh${fetchingState ? ' icon-refreshing' : ''}`} />
              </RefreshButton>
            </HeaderItem>
          </PropertyBar>
        </OverviewHeader>
        {overviewResults?.description && <Description dangerouslySetInnerHTML={{__html: descriptionHtmlString}} />}
        {overviewResults?.comments?.items?.length > 0 && <CommentSection {...overviewResults.comments} /> }
      </OverviewContainer>
    </Placeholder>
  )
}

export default Overview