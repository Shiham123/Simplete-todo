// Import the Task model
const {successResponse, errorResponse} = require("../handler/responseHandler")
const taskSchema = require("../models/taskSchema")

const getAllTask = (req, res) => {
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
			errorResponse(res, {statusCode: 401, message: "not able to create user", errorPayload: error})
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

const getTaskByParams = (req, res) => {
	const {priority} = req.params

	taskSchema
		.find({priority})
		.then((task) => {
			return successResponse(res, {
				statusCode: 202,
				message: "sorted by params",
				payload: task,
			})
		})
		.catch((error) => {
			return errorResponse(res, {
				statusCode: 502,
				message: "not able to sort by params",
				errorPayload: error,
			})
		})
}

module.exports = {postTask, getAllTask, getTaskByParams}
