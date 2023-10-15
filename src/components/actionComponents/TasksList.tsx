import style from './TasksList.module.css';
import Clipboard from '../../assets/images/Clipboard.png';
import { NewTask } from './NewTask';

export function TasksList({ taskList, createNewTask }) {
   function deleteTask(DeleteTask) {
      createNewTask(DeleteTask);
   }

   const NumberOfTasksCompleted = taskList.reduce((count, task) => {
      return task.status ? (count += 1) : count;
   }, 0);

   return (
      <div className={style.tasks}>
         <header className={style.header}>
            <p className={style.tasksCreated}>
               Tarefas criadas <span>{taskList.length}</span>
            </p>
            <p className={style.tasksCompleted}>
               Concluidas{' '}
               <span>
                  {NumberOfTasksCompleted} de {taskList.length}
               </span>
            </p>
         </header>

         <div className={style.body}>
            {/* aqui corta */}
            {taskList.length === 0 ? (
               <>
                  <div className={style.withoutTask}>
                     <img src={Clipboard} alt="" />
                  </div>
                  <div>
                     <p>Você ainda não tem tarefas cadastradas</p>
                     <p>Crie tarefas e organize seus itens a fazer</p>
                  </div>
               </>
            ) : (
               <div className={style.withTask}>
                  {taskList.map((task) => {
                     return (
                        <NewTask
                           key={task.task}
                           tasksList={taskList}
                           content={task}
                           editTask={createNewTask}
                           onDeleteTask={deleteTask}
                        />
                     );
                  })}
               </div>
            )}
         </div>
      </div>
   );
}
