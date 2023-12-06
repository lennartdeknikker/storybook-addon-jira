import React from 'react';
import { styled } from "@storybook/theming";
import mapJiraColor from 'src/helpers/mapJiraColor';
import { Status } from 'src/types';

interface StatusLabelProps {
  status: Status; 
}

const StatusLabel: React.FC<StatusLabelProps> = (props: StatusLabelProps) => {
  
  const StatusLabel = styled.span({
    display: 'block',
    padding: '6px 20px 0 20px',
    fontSize: '14px',
    fontFamily: 'sans-serif',
    fontWeight: '600',
    backgroundColor: mapJiraColor(props.status.color),
    color: 'white',
    width: 'fit-content',
    borderRadius: '3px',
    height: '30px',
    lineHeight: '20px',
    marginRight: '10px',
    marginLeft: 'auto',
  })

  return (
    <StatusLabel>{props.status.label}</StatusLabel>
  )

}

export default StatusLabel
