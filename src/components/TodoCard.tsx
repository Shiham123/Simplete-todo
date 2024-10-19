const TodoCard = () => {
	return (
		<div className="bg-white rounded-md flex justify-between items-center p-4">
			<input type="checkbox" name="" id="" />
			<p className="font-semibold">Todo Title</p>
			<p>Todo Created Time</p>
			<p>Short Description</p>

			<div className="flex space-x-4">
				<button>Delete</button>
				<button>Edit</button>
			</div>
		</div>
	)
}

export default TodoCard
