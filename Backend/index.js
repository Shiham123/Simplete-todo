require("dotenv").config()
const {MongoClient, ServerApiVersion} = require("mongodb")

// require of the backend features
const express = require("express")
const app = express()
const port = process.env.PORT || 5000
const cors = require("cors")
const morgan = require("morgan")

app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

const mongodbUrl = "mongodb://localhost:27017/"

const client = new MongoClient(mongodbUrl, {serverApi: ServerApiVersion.v1})

app.get("/", (req, res) => {
	res.send("hello world")
})

app.listen(port, () => {
	// eslint-disable-next-line no-console
	console.log(`http://localhost:${port}`)
})
