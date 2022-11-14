import React from 'react'
import {ITask} from '../interfaces/Task'
import styles from './TaskList.module.css'
import {BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs'
type Props = {
  taskList: ITask[];
  handleDelete(id: number): void
}

const TaskList = ({taskList, handleDelete}: Props) => {
  
  const renderTaskList = () => {
    return taskList.map(({id, title, difficulty}) => (
      <div key={id} className={styles.task}>
        <div className={styles.details}>
          <h4>{title}</h4>
          <p>Dificuldade: {difficulty}</p>
        </div>
        <div className={styles.actions}>
          <i>
          <BsFillPencilFill  />
          </i>
          <i>
          <BsFillTrashFill  
          onClick={() => handleDelete(id)}
          />          
          </i>
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