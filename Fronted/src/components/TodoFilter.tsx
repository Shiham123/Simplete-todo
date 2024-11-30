interface TTodoPriority {
	priority: string
	setPriority: (value: string) => void
}

const TodoFilter = ({priority, setPriority}: TTodoPriority) => {
	return (
		<div className="relative">
			<select className="bg-black text-white px-4 py-2 text-2xl rounded-lg border-2 border-black capitalize hover:bg-transparent hover:text-black transition-colors duration-300">
				<option value="low">Low</option>
				<option value="medium">Medium</option>
				<option value="high">High</option>
			</select>
		</div>
	)
}

export default TodoFilter
