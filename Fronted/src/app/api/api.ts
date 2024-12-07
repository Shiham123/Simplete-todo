import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const baseApi = createApi({
	reducerPath: "baseApi",
	baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000"}),
	tagTypes: ["todo"],
	endpoints: (builder) => ({
		getTodos: builder.query({
			query: (priority) => ({url: `/api/task?priority=${priority}`, method: "GET"}),
			providesTags: ["todo"],
		}),
		addTodo: builder.mutation({
			query: (data) => ({url: "/api/task", method: "POST", body: data}),
			invalidatesTags: ["todo"],
		}),
		// delete todo RTK query URL generator
		deleteTodos: builder.mutation({
			query: (id) => ({url: `/api/task/${id}`, method: "DELETE"}),
			invalidatesTags: ["todo"],
		}),
	}),
})

export const {useGetTodosQuery, useAddTodoMutation, useDeleteTodosMutation} = baseApi
