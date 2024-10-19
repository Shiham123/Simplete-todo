import TodoCard from "./TodoCard"

const TodoContainer = () => {
	return (
		<div>
			<div>
				<button>add Todo</button>
				<button>Filter</button>
			</div>
			<div className="bg-red-500 w-full h-[500px] rounded-md p-10 space-y-4">
				<TodoCard />
				<TodoCard />
				<TodoCard />
			</div>
		</div>
	)
}

export default TodoContainer
