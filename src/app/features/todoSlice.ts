import {createSlice} from "@reduxjs/toolkit"
import type {PayloadAction} from "@reduxjs/toolkit"

type TTodo = {id: string; title: string; description: string; isCompleted?: boolean}
type TInitialState = {todos: TTodo[]}

const initialState: TInitialState = {todos: []}

const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<TTodo>) => {
			state.todos.push({...action.payload, isCompleted: action.payload.isCompleted ?? false})
		},
		removeTodo: (state, action: PayloadAction<string>) => {
			state.todos = state.todos.filter((item) => item.id !== action.payload)
		},
		toggleIsComplete: (state, action: PayloadAction<string>) => {
			const tasks = state.todos.find((item) => item.id === action.payload)
			tasks!.isCompleted = !tasks?.isCompleted
		},
	},
})

export const {addTodo, removeTodo, toggleIsComplete} = todoSlice.actions
export default todoSlice.reducer
