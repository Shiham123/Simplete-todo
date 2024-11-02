const errorResponse = (
	res,
	{statusCode = 500, message = "default error message", errorPayload = {}},
) => {
	return res.status(statusCode).json({success: false, message: message, errorPayload})
}

const successResponse = (res, {statusCode = 200, message = "success request", payload = {}}) => {
	return res.status(statusCode).json({success: true, message: message, payload})
}

module.exports = {errorResponse, successResponse}
