import style from './NewTask.module.css';

export function NewTask({ tasksList, content, editTask, onDeleteTask }) {
   function handleCompleted() {
      const updTask = tasksList.filter((t) =>
         t.task === content.task ? [(t.status = !t.status)] : t
      );

      editTask(updTask);
   }

   function handleDeleteTask() {
      const deletarTarefa = tasksList.filter(
         (t) => t.task !== content.task && t
      );

      onDeleteTask(deletarTarefa);
   }

   return (
      <>
         {content.status ? (
            <div className={style.newTask}>
               <div className={style.checked}>
                  <span
                     className="material-symbols-outlined"
                     onClick={handleCompleted}
                  >
                     check
                  </span>
                  <p>{content.task}</p>
               </div>
               <div className={style.trash}>
                  <button
                     onClick={handleDeleteTask}
                     className="material-symbols-outlined"
                  >
                     delete
                  </button>
               </div>
            </div>
         ) : (
            <div className={style.newTask}>
               <div className={style.checkbox}>
                  <span onClick={handleCompleted}></span>
                  <p>{content.task}</p>
               </div>
               <div className={style.trash}>
                  <button
                     onClick={handleDeleteTask}
                     className="material-symbols-outlined"
                  >
                     delete
                  </button>
               </div>
            </div>
         )}
      </>
   );
}
