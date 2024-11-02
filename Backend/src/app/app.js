const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const router = require("../router/route")

// use built in middleware
const app = express()
app.use(morgan("dev"))
app.use(cors())
app.use(express.json())

app.use("/api", router)

app.get("/", (req, res) => {
	res.status(200).json({message: "server is running"})
})

app.get("/api", (req, res) => {
	res.status(200).json({message: "route is running"})
})

module.exports = app
