const {Router} = require("express")
const router = Router()

// imported controller
const {postTask, getAllTask} = require("../controller/taskController")

// routes
router.route("/task").post(postTask).get(getAllTask)

module.exports = router
