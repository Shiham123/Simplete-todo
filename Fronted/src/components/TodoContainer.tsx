import {useAppSelector} from "../app/hook"
import useModal from "../hooks/useModal"
import Button from "../Shared/Button"
import AddTodoModal from "./AddTodoModal"
import TodoCard from "./TodoCard"

const TodoContainer = () => {
	// get all todos from redux collection
	const {todos} = useAppSelector((state) => state.todos)

	const {isModalOpen} = useModal()
	return (
		<>
			<div className="space-y-5">
				{/* Todo Button Here */}
				<Button />

				{/* todo Body Here */}
				<div className="bg-red-500 w-full h-full rounded-md p-10 space-y-4">
					<div className="bg-white p-3 flex justify-center items-center font-semibold uppercase text-3xl">
						<p>This is no Task pending</p>
					</div>
					{todos.map((item) => (
						<TodoCard
							id={item.id}
							title={item.title}
							description={item.description}
							isCompleted={item.isCompleted}
						/>
					))}
				</div>
			</div>

			{isModalOpen && <AddTodoModal />}
		</>
	)
}

export default TodoContainer
