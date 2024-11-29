const {Schema, model} = require("mongoose")

const TaskModel = new Schema({
	title: {type: String},
	description: {type: String},
	isCompleted: {type: Boolean},
	priority: {type: String},
})

module.exports = model("Task", TaskModel)
