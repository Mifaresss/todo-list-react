export function MyInput(props) {

	return (
		<input
			className='todo__input'
			placeholder='Create a new todo'
			onKeyUp={props.onKeyUp}
			value={props.value}
			onChange={e => props.onChange(e.target.value)}
		/>
	)
}
