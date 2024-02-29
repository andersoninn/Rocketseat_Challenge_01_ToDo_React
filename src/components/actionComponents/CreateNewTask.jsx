import style from './CreateNewTask.module.css';

export function CreateNewTask({ taskList, createNewTask }) {
   function handleCreateNewTask(event) {
      event.preventDefault();

      createNewTask([
         ...taskList,
         { task: event.target.inputNewTask.value, status: false },
      ]);
      event.target.inputNewTask.value = '';
   }
   return (
      <form onSubmit={handleCreateNewTask} className={style.form}>
         <input
            name="inputNewTask"
            type="text"
            placeholder="Adicione uma nova tarefa"
            className={style.input}
            required
         />
         <button type="submit" className={style.button}>
            <span>Criar</span>{' '}
            <span className="material-symbols-outlined">add_circle</span>
         </button>
      </form>
   );
}
