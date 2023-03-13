import s from './MainInput.module.css';

export function MainInput(props) {
   return (
      <label htmlFor='main-input' className={s.mainLabel}>
         <input
            id='main-input'
            className={s.mainInput}
            placeholder='Create a new todo'
            onKeyUp={props.addTodo}
            value={props.value}
            onChange={e => props.onChange(e.target.value)}
         />
         <button onClick={props.addTodo} className={s.addButton}>
            +
         </button>
      </label>
   );
}
