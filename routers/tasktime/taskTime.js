const express       = require('express')
const router        = express.Router()
const TaskController = require('../../controllers/TaskController')
const authorized = require("../../middleware/authorization-middleware")

router.get("/task", TaskController.TaskData)


module.exports = router