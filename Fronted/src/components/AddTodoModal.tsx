import {FormEvent, useState} from "react"
import useModal from "../hooks/useModal"

// for local
// import { addTodo } from "../app/features/todoSlice"

// for server
import {useAddTodoMutation} from "../app/api/api"

const AddTodoModal = () => {
	const {closeModal} = useModal()

	// form handler hooks
	const [title, setTitle] = useState("")
	const [description, setDescription] = useState("")
	const [priority, setPriority] = useState("")

	// dispatch use app dispatch with custom hook
	// !for local state management
	// const dispatch = useAppDispatch()

	// !for server
	const [addTodo, {data, isLoading, isError, isSuccess}] = useAddTodoMutation()

	console.log("outside api / modal", {data, isLoading, isError, isSuccess})

	const onSubmit = (e: FormEvent) => {
		// for local
		// random id generate for delete todo
		// const randomString = Math.random().toString(36).substring(2, 7)

		e.preventDefault()
		const taskDetails = {title: title, description, isCompleted: false, priority}

		console.log("inside modal", taskDetails)
		// !for server
		addTodo(taskDetails)

		// !for local state management
		// dispatch(addTodo(taskDetails))

		closeModal()
	}

	const handlePriorityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setPriority(event.target.value)
	}

	return (
		<div className="fixed bg-black/50 inset-0 w-full h-full flex justify-center items-center">
			<div className="bg-white rounded-lg p-10">
				<form onSubmit={onSubmit} action="" className="flex flex-col gap-10">
					<div>
						<label htmlFor="title">Title : </label>
						<input
							onBlur={(e) => setTitle(e.target.value)}
							type="text"
							name="title"
							placeholder="Write title"
						/>
					</div>
					{/* for local */}
					{/* <div>
						<label htmlFor="time">Date : </label> 
						<input type="date" name="date" placeholder="title" />
					</div> */}

					<div>
						<label htmlFor="priority">Priority: </label>
						<select
							onChange={handlePriorityChange}
							name="priority"
							className="p-2 rounded border"
							value={priority}
						>
							<option value="" disabled>
								Select Priority
							</option>
							<option value="High">High</option>
							<option value="Medium">Medium</option>
							<option value="Low">Low</option>
						</select>
					</div>
					<div>
						<label htmlFor="description">Description : </label>
						<input
							onBlur={(e) => setDescription(e.target.value)}
							type="text"
							name="description"
							placeholder="Write Description"
						/>
					</div>
					<button
						type="submit"
						className="bg-black px-4 py-2 text-white capitalize text-2xl rounded-lg hover:bg-transparent hover:text-black border-2 border-black transition-colors duration-300"
					>
						Submit Todo
					</button>
				</form>
			</div>
		</div>
	)
}

export default AddTodoModal
