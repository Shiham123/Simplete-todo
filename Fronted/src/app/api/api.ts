import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const baseApi = createApi({
	reducerPath: "baseApi",
	baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000"}),
	endpoints: (builder) => ({
		getTodos: builder.query({
			query: () => ({url: "/api/task", method: "GET"}),
		}),
		addTodo: builder.mutation({
			query: (data) => {
				console.log("inside base api", data)
				return {
					url: "/api/task",
					method: "POST",
					body: data,
				}
			},
		}),
	}),
})

export const {useGetTodosQuery, useAddTodoMutation} = baseApi
