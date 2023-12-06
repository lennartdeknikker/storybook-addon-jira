import React from 'react';
import { styled } from "@storybook/theming";
import type { SubTasks as SubTasksType} from '../../types'
import TicketLink from './TicketLink';
import StatusLabel from './StatusLabel';

interface SubTasksProps {
  subTasks?: SubTasksType
}

const SubTasks: React.FC<SubTasksProps> = (props: SubTasksProps) => {

  const SubTasksSection = styled.div(({ theme }) => ({
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: theme.background.app,
    marginBottom: '1em',
  }))

  const SubTasksTitle = styled.h2({
    margin: '0 0 10px 0',
  })
  
  const SubTasksList = styled.div(({ theme }) => ({
    display: 'block',
    padding: '5px',
    backgroundColor: theme.background.content,
  }))

  const Ticket = styled.div(() => ({
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }))

  const subTasks: React.JSX.Element[] = []
  Object.keys(props.subTasks.categories).forEach((key, index) => {
    props.subTasks.categories[key].items.forEach((item, index2) => { 
      subTasks.push(
        <Ticket>
          <TicketLink ticketId={item.id} summary={item.summary} isSubtask />
          <StatusLabel status={item.status} />
        </Ticket>
      )
    })
  })

  return (
    <SubTasksSection>
      <SubTasksTitle>Subtasks</SubTasksTitle>
      <SubTasksList>
        {subTasks.map((item, index) => {
          return (
            <div key={index}>
              {item}
            </div>)
        })}
      </SubTasksList>
    </SubTasksSection>
  )
}

export default SubTasks
