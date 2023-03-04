import { forwardRef } from 'react';

export const TodoItem = forwardRef(function TodoItem(props, ref) {
   return (
      <li ref={ref} className='todo__item'>
         <p className='todo__body'>{props.title}</p>
         <div className='todo__wrapper-buttons'>
            <label
               htmlFor={props.id}
               className='todo__button todo__button--done'
               style={props.isDone ? { backgroundColor: 'orange', color: 'rgb(179, 100, 4)' } : { color: 'rgb(4, 132, 32)' }}
            >
               {props.isDone ? 'Mark as undone' : 'Mark as done'}
            </label>
            <input
               className='todo__done-checkbox'
               id={props.id}
               type='checkbox'
               checked={props.isDone}
               onChange={e => props.markDoneTodo(e, props.id)}
            />
            <button className='todo__button todo__button--delete' onClick={() => props.deleteTodo(props.id)}>
               X
            </button>
         </div>
      </li>
   );
});
