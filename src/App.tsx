import { Header } from './components/Header';
import { CreateNewTask } from './components/actionComponents/CreateNewTask';
import { TasksList } from './components/actionComponents/TasksList';
import { useState } from 'react';

import './App.css';

export default function App() {
   const [taskList, setTaskList] = useState([]);

   return (
      <>
         <Header />
         <CreateNewTask taskList={taskList} createNewTask={setTaskList} />
         <TasksList taskList={taskList} createNewTask={setTaskList} />
      </>
   );
}
