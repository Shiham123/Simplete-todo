require("dotenv").config()
const {MongoClient, ServerApiVersion} = require("mongodb")

// Require files here
const express = require("express")
const cors = require("cors")
const morgan = require("morgan") // Import Morgan
const app = express()
const port = process.env.PORT || 5000

const mongodbUrl = "mongodb://localhost:27017/"
const client = new MongoClient(mongodbUrl, {serverApi: ServerApiVersion.v1})

// Use Morgan middleware for logging
app.use(cors())
app.use(express.json())
app.use(morgan("dev")) // Use 'dev' for concise output

// Handle GET requests
app.get("/", (req, res) => {
	res.send("hello world")
})

// Handle POST requests

app.listen(port, () => {
	// eslint-disable-next-line no-console
	console.log(`http://localhost:${port}`)
})

// TODO: next time i will setup app/controller/database/handler/models/router also with mongoose
