import React from 'react';
import { styled, themes, convert } from "@storybook/theming";

const createProgressBarCssVariables = (subtasksProgress) => {
  const cssVariables = {}
  // Add percentages of progressbarParts for widths.
  for (let subtaskProgress of subtasksProgress) {
    cssVariables[`--${subtaskProgress.id}-width`] = `${subtaskProgress.percentage}%`
    cssVariables[`--${subtaskProgress.id}-color`] = mapColor(subtaskProgress.color)
  }
  return cssVariables
}

const mapColor = (color) => {
  if (color === 'yellow') return '#0052cc'
  if (color === 'green') return '#36b37e'
  return '#ebecf0'
}

const ProgressBar = ({subtasksProgress}) => {
  console.log('🚀 ~ subtasksProgress', subtasksProgress)

  const ProgressBarWrapper = styled.div({
    ...createProgressBarCssVariables(subtasksProgress),
    display: 'flex',
    borderRadius: '5px',
    overflow: 'hidden',
    width: 'calc(100% - 80px)',
    height: '10px'
  })

  const ProgressBarPart = styled.div({
    backgroundColor: 'blue',
    height: '100%'
  })

  const ProgressBarLabel = styled.span({
    width: '80px',
    fontSize: '.5rem',
    paddingLeft: '10px'
  })
  
  const ProgressBarContainer = styled.div({
    display: 'flex'
  })

  return (
    <ProgressBarContainer>
      <ProgressBarWrapper>
        {subtasksProgress.map((subtaskProgress, index) => {
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