import TodoContainer from "../components/TodoContainer"
import Container from "../Shared/Container"

const Todo = () => {
	return (
		<Container>
			<h1 className="text-center text-3xl font-semibold my-10 uppercase">My Todos</h1>
			<TodoContainer />
		</Container>
	)
}

export default Todo
