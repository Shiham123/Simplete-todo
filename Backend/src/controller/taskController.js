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

const postTask = (req, res) => {
	const {title, details} = req.body

	if (!title || !details) {
		return errorResponse(res, {statusCode: 400, message: "Title and description are required"})
	}

	taskSchema
		.create({title, details})
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
