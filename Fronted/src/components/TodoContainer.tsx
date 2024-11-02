import {useGetTodosQuery} from "../app/api/api"
import useModal from "../hooks/useModal"
import Button from "../Shared/Button"
import AddTodoModal from "./AddTodoModal"
import TodoCard from "./TodoCard"

const TodoContainer = () => {
	// get all todos from redux collection
	// const {todos} = useAppSelector((state) => state.todos)

	// custom hook
	const {isModalOpen} = useModal()

	// from server
	// from server
	const {data: todos, isLoading, isError} = useGetTodosQuery(undefined)

	if (isLoading) return <p>...loading</p>

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
					{todos?.payload.map((item) => (
						<TodoCard
							key={item.id}
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
