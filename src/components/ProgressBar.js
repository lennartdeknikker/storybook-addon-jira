import React from 'react';
import { styled, themes, convert } from "@storybook/theming";

const createProgressBarCssVariables = (subtasksProgress) => {
  const cssVariables = {}
  for (let subtaskProgress of subtasksProgress) {
    cssVariables[`--${subtaskProgress.id}`] = `${subtaskProgress.percentage}%`
  }
  return cssVariables
}

const ProgressBar = ({subtasksProgress}) => {
  console.log('🚀 ~ subtasksProgress', subtasksProgress)

  const ProgressBarWrapper = styled.div({
    ...createProgressBarCssVariables(subtasksProgress),
    display: 'flex',
    flexDirection: 'row-reverse'
  })

  const ProgressBarPart = styled.div({
    backgroundColor: 'blue'
  })

  return (
    <ProgressBarWrapper>
      {subtasksProgress.map((subtaskProgress, index) => {
        return (
        <ProgressBarPart 
        key={index} 
        className={`ProgressBar-${subtaskProgress.id}`}
        style={{width: `var(--${subtaskProgress.id})`}}
        >
          {subtaskProgress.id}
        </ProgressBarPart>
        )
      })}
    </ProgressBarWrapper>
  )
}

export default ProgressBar