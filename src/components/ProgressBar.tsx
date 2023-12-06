import React from 'react';
import { styled, themes, convert } from "@storybook/theming";
import mapJiraColor from '../helpers/mapJiraColor'
import { parseToCamelCase } from '../helpers/parseCamelCase';
import type { SubtaskProgress } from '../types'

interface ProgressBarProps {
  subtasksProgress?: any[]; 
  idsInOrder?: string[],
}

const createProgressBarCssVariables = (subtasksProgress: SubtaskProgress[]) => {
  let cssVariables: { [key: string]: string } = {}

  // Add percentages of progressbarParts for widths.
  for (let subtaskProgress of subtasksProgress) {
    cssVariables[`--${subtaskProgress.id}-width`] = `${subtaskProgress.percentage}%`
    cssVariables[`--${subtaskProgress.id}-color`] = mapJiraColor(subtaskProgress?.color)
  }
  return cssVariables
}

const ProgressBar: React.FC<ProgressBarProps> = (props: ProgressBarProps) => {

  if (props.idsInOrder)
    props.subtasksProgress.sort((a, b) => props.idsInOrder.indexOf(a.id) < props.idsInOrder.indexOf(b.id) ? 1 : -1)

  const ProgressBarContainer = styled.div({
    display: 'flex',
    width: '100%',
    marginTop: '15px'
  })

  const ProgressBarWrapper = styled.div(({ theme }) => ({
    ...createProgressBarCssVariables(props.subtasksProgress),
    backgroundColor: theme.background.app,
    display: 'flex',
    borderRadius: '5px',
    overflow: 'hidden',
    flex: 1,
    height: '10px'
  }))

  const ProgressBarPart = styled.div({
    height: '100%',
    width: '100%',
    maxWidth: '0',
    transition: 'max-width 1s ease'
  })

  const ProgressBarLabel = styled.span({
    width: 'fit-content',
    paddingLeft: '10px'
  })
  
  return (
    <ProgressBarContainer>
      <ProgressBarWrapper>
        {
          props.subtasksProgress?.map((subtaskProgress, index) => {
          return (
          <ProgressBarPart 
          key={index} 
          className={`ProgressBar-${subtaskProgress.id}`}
          style={{
            maxWidth: `var(--${subtaskProgress.id}-width)`,
            backgroundColor: `var(--${subtaskProgress.id}-color)`
          }}
          />
          )
        })}
      </ProgressBarWrapper>
      <ProgressBarLabel>
        {Math.floor(props.subtasksProgress[0]?.percentage)}% {props.subtasksProgress[0]?.id}
      </ProgressBarLabel>
    </ProgressBarContainer>
  )
}

export default ProgressBar
