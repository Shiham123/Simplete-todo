import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const baseApi = createApi({
	reducerPath: "baseApi",
	baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000"}),
	endpoints: (builder) => ({
		getTodos: builder.query({
			query: () => ({url: "/api/task", method: "GET"}),
		}),
		addTodo: builder.mutation({
			query: (data) => ({url: "/task", method: "POST", body: data}),
		}),
	}),
})

const {useGetTodosQuery, useAddTodoMutation} = baseApi

export {baseApi, useGetTodosQuery, useAddTodoMutation}
