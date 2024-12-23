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

const deleteTask = (req, res) => {
	const {id} = req.params

	if (id) {
		taskSchema
			.findById(id)
			.then((perTask) => {
				if (perTask) {
					taskSchema
						.deleteOne({_id: id})
						.then(() => {
							return successResponse(res, {statusCode: 200, message: "deleted successfully"})
						})
						.catch(() => {
							return errorResponse(res, {
								statusCode: 404,
								message: "not able to delete in specific item",
							})
						})
				} else {
					return errorResponse(res, {statusCode: 400, message: "Task Not found id not matched"})
				}
			})
			.catch((error) => {
				return errorResponse(res, {
					statusCode: 406,
					message: "id find but not find data based on id",
					errorPayload: error,
				})
			})
	} else {
		return errorResponse(res, {statusCode: 405, message: "id not find"})
	}
}

module.exports = {postTask, getAllTask, deleteTask}
