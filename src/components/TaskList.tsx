import React from 'react'
import {ITask} from '../interfaces/Task'
import styles from './TaskList.module.css'
import {BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs'
type Props = {
  taskList: ITask[];
  handleDelete(id: number): void
  handleEdit(task: ITask):void
}

const TaskList = ({taskList, handleDelete, handleEdit}: Props) => {
  
  const renderTaskList = () => {
    return taskList.map(({id, title, difficulty}) => (
      <div key={id} className={styles.task}>
        <div className={styles.details}>
          <h4>{title}</h4>
          <p>Dificuldade: {difficulty}</p>
        </div>
        <div className={styles.actions}>
          <i onClick={() => handleEdit({id, title, difficulty})}>
          <BsFillPencilFill  />
          </i>
          <i onClick={() => handleDelete(id)}>
          <BsFillTrashFill            
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