import React from 'react';
const ProgressBar = ({subtasksProgress}) => {
console.log('🚀 ~ subtasksProgress', subtasksProgress)

  return (
    <div className="ProgressBar">
      test
      {subtasksProgress.map((subtaskProgress, index) => {
        return <div key={index} className={`ProgressBar-${subtaskProgress.id}`}>{subtaskProgress.id}</div>
      })}
    </div>
  )
}

export default ProgressBar