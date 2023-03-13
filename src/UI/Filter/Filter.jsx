import s from './Filter.module.css';

export function Filter(props) {
   return (
      <div className={s.filter}>
         <label htmlFor={props.id} className={s.filterButton}>
            <span>All</span>
            <input
               name='filter'
               id={props.id}
               type='radio'
               className={s.filterRadioInput}
               value='all'
               checked={props.checked === 'all' ? true : false}
               onChange={props.changingDisplayedTodos}
            />
         </label>

         <label htmlFor={props.id} className={s.filterButton}>
            <span>Active</span>
            <input
               name='filter'
               id={props.id}
               type='radio'
               className={s.filterRadioInput}
               value='active'
               checked={props.checked === 'active' ? true : false}
               onChange={props.changingDisplayedTodos}
            />
         </label>

         <label htmlFor={props.id} className={[s.filterButton, s.filterButtonCompleted].join(' ')}>
            <span>Completed</span>
            <input
               name='filter'
               id={props.id}
               type='radio'
               className={s.filterRadioInput}
               value='completed'
               checked={props.checked === 'completed' ? true : false}
               onChange={props.changingDisplayedTodos}
            />
         </label>
      </div>
   );
}
