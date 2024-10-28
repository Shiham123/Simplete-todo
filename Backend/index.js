require("dotenv").config()
const http = require("http")
const url = require("url")
const {MongoClient, ServerApiVersion} = require("mongodb")

// Port from environment or default to 5000
const port = process.env.PORT || 5000

// MongoDB setup
const mongodbUrl = "mongodb://localhost:27017/"
const client = new MongoClient(mongodbUrl, {serverApi: ServerApiVersion.v1})

// Basic CORS setup
const enableCors = (res) => {
	res.setHeader("Access-Control-Allow-Origin", "*")
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE")
	res.setHeader("Access-Control-Allow-Headers", "Content-Type")
}

// Request handler function
const requestHandler = async (req, res) => {
	const parsedUrl = url.parse(req.url, true)
	const {pathname} = parsedUrl

	// Enable CORS for all responses
	enableCors(res)

	// Root route
	if (pathname === "/" && req.method === "GET") {
		res.writeHead(200, {"Content-Type": "text/plain"})
		res.end("Hello World")
		return
	}

	// Handle 404 Not Found for unknown routes
	res.writeHead(404, {"Content-Type": "application/json"})
	res.end(JSON.stringify({message: "Route not found"}))
}

// Create the server
const server = http.createServer(requestHandler)

// Start the server and connect to MongoDB
const startServer = () => {
	client
		.connect()
		.then(() => {
			// eslint-disable-next-line no-console
			console.log("Connected to MongoDB")

			server.listen(port, () => {
				// eslint-disable-next-line no-console
				console.log(`Server running at http://localhost:${port}`)
			})
		})
		.catch((err) => {
			// eslint-disable-next-line no-console
			console.error("Failed to connect to MongoDB", err)
		})
}

startServer()
