import React from 'react';
import { styled, themes, convert } from "@storybook/theming";
import mapJiraColor from '../helpers/mapJiraColor'

const createProgressBarCssVariables = (subtasksProgress) => {
  const cssVariables = {}
  // Add percentages of progressbarParts for widths.
  for (let subtaskProgress of subtasksProgress) {
    cssVariables[`--${subtaskProgress.id}-width`] = `${subtaskProgress.percentage}%`
    cssVariables[`--${subtaskProgress.id}-color`] = mapJiraColor(subtaskProgress.color)
  }
  return cssVariables
}

const ProgressBar = ({subtasksProgress}) => {
  console.log('🚀 ~ subtasksProgress', subtasksProgress)

  const ProgressBarContainer = styled.div({
    display: 'flex',
    width: '100%'
  })

  const ProgressBarWrapper = styled.div({
    ...createProgressBarCssVariables(subtasksProgress),
    display: 'flex',
    borderRadius: '5px',
    overflow: 'hidden',
    flex: 1,
    height: '10px'
  })

  const ProgressBarPart = styled.div({
    backgroundColor: 'blue',
    height: '100%'
  })

  const ProgressBarLabel = styled.span({
    width: 'fit-content',
    fontSize: '.5rem',
    paddingLeft: '10px'
  })
  
  return (
    <ProgressBarContainer>
      <ProgressBarWrapper>
        {subtasksProgress?.map((subtaskProgress, index) => {
          return (
          <ProgressBarPart 
          key={index} 
          className={`ProgressBar-${subtaskProgress.id}`}
          style={{
            width: `var(--${subtaskProgress.id}-width)`,
            backgroundColor: `var(--${subtaskProgress.id}-color)`
          }}
          />
          )
        })}
      </ProgressBarWrapper>
      <ProgressBarLabel>
        {subtasksProgress[0].percentage}% {subtasksProgress[0].id}
      </ProgressBarLabel>
    </ProgressBarContainer>
  )
}

export default ProgressBar