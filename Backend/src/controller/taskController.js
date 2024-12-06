// Import the Task model
const {successResponse, errorResponse} = require("../handler/responseHandler")
const taskSchema = require("../models/taskSchema")

const getAllTask = (req, res) => {
	const {priority} = req.query

	if (!priority) {
		taskSchema
			.find()
			.then((task) => {
				return successResponse(res, {
					statusCode: 201,
					message: "successfully get all task data",
					payload: task,
				})
			})
			.catch((error) => {
				errorResponse(res, {
					statusCode: 401,
					message: "not able to create user",
					errorPayload: error,
				})
			})
	} else {
		// TODO: here i am build logic to find query based data
		console.log("query", req.query)
	}
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
