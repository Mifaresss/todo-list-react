import s from '../TodoItem.module.css'

export function TodoBody(props) {

	return (
      <div className={s.todoBodyWrapper}>
         <label htmlFor={props.id} className={s.todoLabelCheckbox}>
            <input
               className={s.todoDoneCheckbox}
               id={props.id}
               type='checkbox'
               checked={props.isDone}
               onChange={() => props.markDoneTodo(props.id)}
            />
         </label>
         <p className={s.todoBody}>{props.title}</p>
			<p className={s.todoTime}>{props.date}</p>
      </div>
   )
}