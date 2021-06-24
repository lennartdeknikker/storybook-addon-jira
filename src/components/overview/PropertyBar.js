import React from 'react';
import { styled } from "@storybook/theming";
import parseCreatedDate from '../../helpers/parseCreatedDate';
import AvatarImage from './AvatarImage';
import Icon from './Icon';

const PropertyBar = ({ fetchId, fetchData, fetchingState, reporter, assignedTo, priority, created, lastUpdated }) => {

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
    "&:nth-of-type(6)": {
      flex: 1,
      justifyContent: 'flex-end',
      marginRight: 0
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
    <PropertyBar>
      <HeaderItem>
        Reporter:
        { reporter ?
          reporter?.avatar ?
            <AvatarImage src={reporter.avatar} alt={reporter?.name} />
            : <HeaderItemValue>{reporter?.name}</HeaderItemValue>
          : <HeaderItemValue>...</HeaderItemValue>
        }
      </HeaderItem>
      <HeaderItem>
        Assigned to:
        {assignedTo ? 
          assignedTo?.avatar ?
            <AvatarImage src={assignedTo.avatar} alt={assignedTo?.name} />
            : <HeaderItemValue>{assignedTo?.name || 'not assigned yet'}</HeaderItemValue>
          : <HeaderItemValue>...</HeaderItemValue>
        }
      </HeaderItem>
      <HeaderItem>
        Priority:
        {priority ?
          priority?.label === 'Medium' ?
            <HeaderItemValue>-</HeaderItemValue>
          :
            <AvatarImage src={priority?.icon} alt={priority?.label} className="avatar-priority" />
        : <HeaderItemValue>...</HeaderItemValue>
        }
      </HeaderItem>
      <HeaderItem>
        Created on:
        <HeaderItemValue>
          { created ?
          parseCreatedDate(created)
        : '...'}
        </HeaderItemValue>
      </HeaderItem>
      <HeaderItem>
        Last updated: 
        <HeaderItemValue>
          { lastUpdated ?
          parseUpdatedDate(lastUpdated) 
        : '...' }
        </HeaderItemValue>
      </HeaderItem>
      {fetchId && fetchData &&
      <HeaderItem>
        <RefreshButton
          title="Refresh"
          onClick={() =>  fetchData(fetchId)}
          >
          <Icon icon="sync" className={`icon-refresh${fetchingState ? ' icon-refreshing' : ''}`} />
        </RefreshButton>
      </HeaderItem>
      }

    </PropertyBar>
  )
}

export default PropertyBar