import useModal from "../hooks/useModal"

const Button = () => {
	const {openModal} = useModal()

	return (
		<div className="flex justify-between items-center">
			<button
				onClick={() => openModal()}
				className="bg-black px-4 py-2 text-white capitalize text-2xl rounded-lg hover:bg-transparent hover:text-black border-2 border-black transition-colors duration-300"
			>
				Add Todo
			</button>
			<button className="bg-black px-4 py-2 text-white capitalize text-2xl rounded-lg hover:bg-transparent hover:text-black border-2 border-black transition-colors duration-300">
				Filter
			</button>
		</div>
	)
}

export default Button
