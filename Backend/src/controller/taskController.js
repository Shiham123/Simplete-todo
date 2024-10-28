// Import the Task model
const {successResponse, errorResponse} = require("../handler/responseHandler")
const taskSchema = require("../models/taskSchema")

const postTask = (req, res) => {
	const {title, description} = req.body

	if (!title || !description) {
		return errorResponse(res, {statusCode: 400, message: "Title and description are required."})
	}

	taskSchema
		.create({title, description})
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
				message: `not able to create user ${error.message}`,
			})
		})
}

module.exports = {postTask}
