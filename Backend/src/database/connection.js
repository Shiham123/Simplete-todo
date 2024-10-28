const mongoose = require("mongoose")
const {mongodbUrl} = require("../app/secret")

/* eslint-disable no-console */
const mongodbConnection = async () => {
	try {
		await mongoose.connect(mongodbUrl)
		console.log("database Connected")
	} catch (error) {
		console.log("error connecting database", error)
	}
}

module.exports = {mongodbConnection}
