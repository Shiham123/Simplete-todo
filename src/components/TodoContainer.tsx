import Button from "../Shared/Button"
import TodoCard from "./TodoCard"

const TodoContainer = () => {
	return (
		<div className="space-y-5">
			{/* Todo Button Here */}
			<Button />

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
