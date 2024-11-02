import {configureStore} from "@reduxjs/toolkit"
import TodoReducer from "./features/todoSlice"
import {baseApi} from "./api/api"

const store = configureStore({
	reducer: {
		[baseApi.reducerPath]: baseApi.reducer,
		todos: TodoReducer,
	},
})

// ! typescript type initialization
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
