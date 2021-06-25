import React from 'react';
import { styled, themes, convert } from "@storybook/theming";
import mapJiraColor from '../helpers/mapJiraColor'
import { parseToCamelCase } from '../helpers/parseCamelCase';

const createProgressBarCssVariables = (subtasksProgress) => {
  const cssVariables = {}
  // Add percentages of progressbarParts for widths.
  for (let subtaskProgress of subtasksProgress) {
    cssVariables[`--${subtaskProgress.id}-width`] = `${subtaskProgress?.percentage}%`
    cssVariables[`--${subtaskProgress.id}-color`] = mapJiraColor(subtaskProgress?.color)
  }
  return cssVariables
}

const ProgressBar = ({subtasksProgress, idsInOrder}) => {

  if (idsInOrder) subtasksProgress.sort((a, b) => idsInOrder.indexOf(a.id) < idsInOrder.indexOf(b.id) ? 1 : -1)

  const ProgressBarContainer = styled.div({
    display: 'flex',
    width: '100%',
    marginTop: '15px'
  })

  const ProgressBarWrapper = styled.div({
    ...createProgressBarCssVariables(subtasksProgress),
    backgroundColor: convert(themes.normal).color.light,
    display: 'flex',
    borderRadius: '5px',
    overflow: 'hidden',
    flex: 1,
    height: '10px'
  })

  const ProgressBarPart = styled.div({
    height: '100%',
    width: '100%',
    maxWidth: '0',
    transition: 'max-width 1s ease'
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
            maxWidth: `var(--${subtaskProgress.id}-width)`,
            backgroundColor: `var(--${subtaskProgress.id}-color)`
          }}
          />
          )
        })}
      </ProgressBarWrapper>
      <ProgressBarLabel>
        {subtasksProgress[0]?.percentage}% {subtasksProgress[0]?.id}
      </ProgressBarLabel>
    </ProgressBarContainer>
  )
}

export default ProgressBar