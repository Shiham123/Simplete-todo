const {Router} = require("express")
const router = Router()

// imported controller
const {postTask, getAllTask, deleteTask} = require("../controller/taskController")

// routes
router.route("/task").post(postTask).get(getAllTask).delete(deleteTask)

module.exports = router
