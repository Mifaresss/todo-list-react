export function MyInput(props) {

	return (
		<label htmlFor="main-input" className='todo__main-label'>
			<input
				id='main-input'
				className='todo__main-input'
				placeholder='Create a new todo'
				onKeyUp={props.addTodo}
				value={props.value}
				onChange={e => props.onChange(e.target.value)}
			/>
			<button onClick={props.addTodo} className='todo__add-button'>+</button>
		</label>
	)
}
