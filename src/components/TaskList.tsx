import React from 'react'
import {ITask} from '../interfaces/Task'
import styles from './TaskList.module.css'
import {BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs'
type Props = {
  taskList: ITask[]
}

const TaskList = ({taskList}: Props) => {
  
  const renderTaskList = () => {
    return taskList.map(({id, title, difficulty}) => (
      <div key={id}>
        <div>
          <h4>{title}</h4>
          <p>Dificuldade: {difficulty}</p>
        </div>
        <div>
          <BsFillPencilFill />
          <BsFillTrashFill />          
        </div>
      </div>
    ))
  }

  return (
    <>
      {
        taskList.length > 0 ? 
          renderTaskList()
         : (
          <p>Não há tarefas cadastradas!</p>
        )
      }
    </>
  )
}

export default TaskList