import React from 'react';
import { styled } from "@storybook/theming";
import AvatarImage from './AvatarImage';
import type { User, Priority } from '../../types'

interface PropertyBarProps {
  reporter?: User;
  assignedTo?: User;
  priority?: Priority;
  created?: string;
  lastUpdated?: string;
}

const PropertyBar: React.FC<PropertyBarProps> = (props: PropertyBarProps) => {

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

  return (
    <PropertyBar>
      <HeaderItem>
        Reporter:
        { props.reporter ?
          props.reporter?.avatar ?
            <><AvatarImage src={'/avatar?url=' + encodeURI(props.reporter?.avatar)} alt={props.reporter?.name} title={props.reporter?.name} /><HeaderItemValue>{props.reporter?.name}</HeaderItemValue></>
            : <HeaderItemValue>{props.reporter?.name}</HeaderItemValue>
          : <HeaderItemValue>...</HeaderItemValue>
        }
      </HeaderItem>
      <HeaderItem>
        Assigned to:
        {props.assignedTo ? 
          props.assignedTo?.avatar ?
            <><AvatarImage src={'/avatar?url=' + encodeURI(props.assignedTo?.avatar)} alt={props.assignedTo?.name} title={props.assignedTo?.name} /><HeaderItemValue>{props.assignedTo?.name || 'not assigned'}</HeaderItemValue></>
            : <HeaderItemValue>{props.assignedTo?.name || 'not assigned'}</HeaderItemValue>
          : <HeaderItemValue>...</HeaderItemValue>
        }
      </HeaderItem>
      <HeaderItem>
        Priority:
        {props.priority ?
          props.priority?.label === 'Medium' ?
            <HeaderItemValue>-</HeaderItemValue>
          :
            <AvatarImage src={props.priority?.icon} alt={props.priority?.label} title={props.priority?.label} className="avatar-priority" />
        : <HeaderItemValue>...</HeaderItemValue>
        }
      </HeaderItem>
      <HeaderItem>
        Created on:
        <HeaderItemValue>
          { props.created ?
          new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(props.created))
        : '...'}
        </HeaderItemValue>
      </HeaderItem>
      <HeaderItem>
        Last updated: 
        <HeaderItemValue>
          {props.lastUpdated ?
            new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(props.lastUpdated))
        : '...' }
        </HeaderItemValue>
      </HeaderItem>
    </PropertyBar>
  )
}

export default PropertyBar
