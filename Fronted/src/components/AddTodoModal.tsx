import {FormEvent, useState} from "react"
import useModal from "../hooks/useModal"
import {useAppDispatch} from "../app/hook"
import {addTodo} from "../app/features/todoSlice"

const AddTodoModal = () => {
	const {closeModal} = useModal()

	// form handler hooks
	const [title, setTitle] = useState("")
	const [description, setDescription] = useState("")

	// dispatch use app dispatch with custom hook
	const dispatch = useAppDispatch()

	const onSubmit = (e: FormEvent) => {
		// random id generate for delete todo
		const randomString = Math.random().toString(36).substring(2, 7)

		e.preventDefault()
		const taskDetails = {id: randomString, title: title, description: description}
		dispatch(addTodo(taskDetails))

		closeModal()
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
					<div>
						<label htmlFor="time">Date : </label>
						<input type="date" name="date" placeholder="title" />
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
