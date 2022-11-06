import React from 'react'

type Props = {
    btnText: string
}

const TaskForm = ({btnText}: Props) => {
  return (
    <form>
        <div>
            <label htmlFor="title">
                Título:
                <input type="text" name='title' placeholder='Título da tarefa'/>
            </label>
        </div>
        <div>
            <label htmlFor="difficulty">
                Título:
                <input type="text" name='difficulty' placeholder='Dificuldade da tarefa'/>
            </label>
        </div>
        <input type="submit" value={btnText}/>
    </form>
  )
}

export default TaskForm