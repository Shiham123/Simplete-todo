// Import the Task model
const {successResponse, errorResponse} = require("../handler/responseHandler")
const taskSchema = require("../models/taskSchema")

const getAllTask = (req, res) => {
	const {priority} = req.query

	// find the data based on field
	const query = priority ? {priority: priority} : {}

	// declare schema and find data
	taskSchema
		.find(query)
		.then((task) => {
			return successResponse(res, {
				statusCode: priority ? 202 : 201,
				message: priority ? "Filtered data found" : "Successfully retrieved all task data",
				payload: task,
			})
		})
		.catch((error) => {
			return errorResponse(res, {
				statusCode: 404,
				message: priority ? "Could not find filtered data" : "Unable to retrieve tasks",
				errorPayload: error,
			})
		})
}

// posted a task
const postTask = (req, res) => {
	const {title, description, isCompleted, priority} = req.body
	const postedData = {title, description, isCompleted, priority}

	if (!postedData) {
		return errorResponse(res, {statusCode: 400, message: "Title and description are required"})
	}

	taskSchema
		.create(postedData)
		.then((newTask) => {
			return successResponse(res, {
				statusCode: 200,
				message: "task Created Successfully",
				payload: newTask,
			})
		})
		.catch((error) => {
			return errorResponse(res, {
				statusCode: 401,
				message: "not able to create user",
				errorPayload: error,
			})
		})
}

module.exports = {postTask, getAllTask}
