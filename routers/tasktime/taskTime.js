const express       = require('express')
const router        = express.Router()
const {getTasks, postTasks} = require('../../controllers/TaskController')
const {verifyToken} = require("../../middleware/authorization-middleware")

router.get("/tasks", getTasks)
router.post("/tasks", verifyToken, postTasks)

module.exports = router