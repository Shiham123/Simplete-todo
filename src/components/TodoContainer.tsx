import TodoCard from "./TodoCard"

const TodoContainer = () => {
	return (
		<div className="space-y-5">
			{/* Todo Button Here */}
			<div className="flex justify-between items-center">
				<button className="bg-black px-4 py-2 text-white capitalize text-2xl rounded-lg hover:bg-transparent hover:text-black border-2 border-black transition-colors duration-300">
					add Todo
				</button>
				<button className="bg-black px-4 py-2 text-white capitalize text-2xl rounded-lg hover:bg-transparent hover:text-black border-2 border-black transition-colors duration-300">
					Filter
				</button>
			</div>

			{/* todo Body Here */}
			<div className="bg-red-500 w-full h-full rounded-md p-10 space-y-4">
				<div className="bg-white p-3 flex justify-center items-center font-semibold uppercase text-3xl">
					<p>This is no Task pending</p>
				</div>
				<TodoCard />
			</div>
		</div>
	)
}

export default TodoContainer
