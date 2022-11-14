import React, {useState} from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import styles from './App.module.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { ITask } from './interfaces/Task'
import Modal from './components/Modal';

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])
  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => task.id !== id)
    )
  }

  return (
    <div className="App">
      <Modal />
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm 
          taskList={taskList} 
          setTaskList={setTaskList} 
          btnText="Criar Tarefa"
          />
        </div>
        <div>
          <h2>Sua tarefas</h2>
          <TaskList taskList={taskList} handleDelete={deleteTask} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
