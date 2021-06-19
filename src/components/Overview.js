import React from 'react';
import { Placeholder, Button } from '@storybook/components';
import { styled, themes, convert } from "@storybook/theming";
import { parseCamelCaseToString } from '../helpers/parseCamelCase'
import parseAtlassianDocFormatToMarkDown from '../helpers/parseAtlassianDocFormatToMarkDown'
import ProgressBar from './ProgressBar';
import { Icons } from "@storybook/components";
import mapJiraColor from '../helpers/mapJiraColor';
import nmd from 'nano-markdown'

export const RequestDataButton = styled(Button)({
  marginTop: '1rem',
});

const Icon = styled(Icons)({
  height: '12px',
  width: '12px',
  marginLeft: '5px',
  alignSelf: "center",
  display: "inline-flex",
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
    borderRadius: '5px',
    marginTop: 0,
    a: {
      color: convert(themes.normal).color.darkest,
    },
    padding: '10px',
    backgroundColor: convert(themes.normal).color.light,
  })

  const descriptionAdfString = overviewResults?.description || ''
  const descriptionMarkdownString = parseAtlassianDocFormatToMarkDown(descriptionAdfString)
  const descriptionHtmlString = nmd(descriptionMarkdownString)
  const PropertyBar = styled.div({
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%'
  })

  const HeaderItem = styled.div({
    display: 'flex',
    alignItems: 'center',
    width: 'fit-content',
    margin: '10px 20px 10px 0'
  })
  const AvatarImage = styled.img({
    borderRadius: "50%",
    width: '24px',
    height: '24px',
    marginLeft: '5px',
    '&.priority': {
      transform: "scale(0.6) translateY(5px)"
    }
  })

  const HeaderItemValue = styled.span({
    fontWeight: 300,
    textIndent: '5px'
  })

  const parseCreatedDate = (date) => {
    const dateObject = new Date(date)
    const year = dateObject.getFullYear()
    const month = dateObject.toLocaleString('default', { month: 'long' });
    const day = dateObject.getDate()
    let daySuffix = 'th'
    const dayLastDigit = Number(Array.from(String(day)).pop())
    if (dayLastDigit === 3) daySuffix = 'rd'
    if (dayLastDigit === 2) daySuffix = 'nd'
    if (dayLastDigit === 1) daySuffix = 'st'
    if (day === 13) daySuffix = 'th'
    if (day === 12) daySuffix = 'th'
    if (day === 11) daySuffix = 'th'
    return ` ${month} ${day}${daySuffix}, ${year}`
  }

  const parseUpdatedDate = (date) => {
    const lastUpdated = new Date(date)
    const currentDate = new Date()
    const differenceInSeconds = currentDate - lastUpdated
    const differenceInDays = Math.floor(differenceInSeconds / (1000 * 3600 * 24))
    const suffix = differenceInDays === 1 ? 'day' : 'days'
    return ` ${differenceInDays} ${suffix} ago`
  }

  return (
    <Placeholder>
      <OverviewContainer>
        <OverviewHeader>
          <TicketLink href={`${process.env.STORYBOOK_JIRA_BASE_URL}/${jiraSettings.id}`} target="_blank">
            <TicketTitle>
              <strong>{jiraSettings.id}: </strong>{overviewResults.summary || ''}
              <Icon icon="link" />
            </TicketTitle>
          </TicketLink>
          <StatusLabel>{overviewResults?.status?.label}</StatusLabel>
          {overviewResults?.subtasksProgress && <ProgressBar subtasksProgress={overviewResults.subtasksProgress} />}
          <PropertyBar>
            <HeaderItem>
              Reporter:
              <AvatarImage src={overviewResults?.reporter?.avatar} alt={overviewResults?.reporter?.name} />
            </HeaderItem>
            <HeaderItem>
              Assigned to:
              <AvatarImage src={overviewResults?.assignedTo?.avatar} alt={overviewResults?.assignedTo?.name} />
            </HeaderItem>
            <HeaderItem>
              Priority:
              {overviewResults?.priority?.label === 'Medium' ?
              <HeaderItemValue>-</HeaderItemValue>
              :
                <AvatarImage src={overviewResults?.priority?.icon} alt={overviewResults?.priority?.label} className="priority" />
              }
            </HeaderItem>
            <HeaderItem>
              Created on:
              <HeaderItemValue>
                { parseCreatedDate(overviewResults?.created) }
              </HeaderItemValue>
            </HeaderItem>
            <HeaderItem>
              Last updated: 
              <HeaderItemValue>
                { parseUpdatedDate(overviewResults?.lastUpdated) }
              </HeaderItemValue>
            </HeaderItem>
          </PropertyBar>
        </OverviewHeader>
        {overviewResults?.description && <Description dangerouslySetInnerHTML={{__html: descriptionHtmlString}} />}
      <ul>
        {Object.keys(overviewResults).map((key, index) =>
          typeof overviewResults[key] === 'string' ?
          <li key={index}>{parseCamelCaseToString(key)}: {overviewResults[key]}</li>
          : <li key={index}>{key}</li>
        )}
      </ul>
      {jiraSettings?.id &&
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
      }
      </OverviewContainer>
    </Placeholder>
  )
}

export default Overview