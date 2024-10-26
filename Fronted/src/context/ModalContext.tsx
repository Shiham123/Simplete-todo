import {createContext, ReactNode, useState} from "react"

interface ModalContextType {
	isModalOpen: boolean
	openModal: () => void
	closeModal: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

const ModalProvider = ({children}: {children: ReactNode}) => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const openModal = () => setIsModalOpen(true)
	const closeModal = () => setIsModalOpen(false)

	return (
		<ModalContext.Provider value={{isModalOpen, openModal, closeModal}}>
			{children}
		</ModalContext.Provider>
	)
}

export {ModalProvider}
export default ModalContext
