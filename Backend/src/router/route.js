const {Router} = require("express")
const router = Router()

// imported controller
const {postTask, getAllTask, getTaskByParams} = require("../controller/taskController")

// routes
router.route("/task").post(postTask).get(getAllTask)
router.route("/task/:priority").get(getTaskByParams)

module.exports = router
