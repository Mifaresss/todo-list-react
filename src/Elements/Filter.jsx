
export function Filter(props) {

  return (
    <div className='filter'>
      <label htmlFor={props.id} className='filter__button filter__button--all'>
        <span>All</span>
        <input
          name='filter'
          id={props.id}
          type='radio'
          className='filter__radio-input'
          value='all'
          checked={props.checked === 'all' ? true : false}
          onChange={props.changingDisplayedTodos}
        />
      </label>

      <label htmlFor={props.id} className='filter__button filter__button--active'>
        <span>Active</span>
        <input
          name='filter'
          id={props.id}
          type='radio'
          className='filter__radio-input'
          value='active'
          checked={props.checked === 'active' ? true : false}
          onChange={props.changingDisplayedTodos}
        />
      </label>

      <label htmlFor={props.id} className='filter__button filter__button--completed'>
        <span>Completed</span>
        <input
          name='filter'
          id={props.id}
          type='radio'
          className='filter__radio-input'
          value='completed'
          checked={props.checked === 'completed' ? true : false}
          onChange={props.changingDisplayedTodos}
        />
      </label>
      {/* <button className="filter__button filter__button--all">All</button>
			<button className="filter__button filter__button--active">Active</button>
			<button className="filter__button filter__button--completed">Completed</button> */}
    </div>
  );
}
