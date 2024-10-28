const {Router} = require("express")
const router = Router()

// imported controller
const {postTask} = require("../controller/taskController")

// routes
router.route("/task", postTask)

module.exports = router
