const app = require("./src/app/app")
const {portNumber} = require("./src/app/secret")
const {mongodbConnection} = require("./src/database/connection")

/* eslint-disable no-console */
mongodbConnection()
	.then(() => {
		try {
			app.listen(portNumber, () => {
				console.log(`Server is connected to http://localhost:${portNumber}`)
			})
		} catch (error) {
			console.log(error)
		}
	})
	.catch((error) => {
		console.log("cannot able to connect with the server", error)
	})
