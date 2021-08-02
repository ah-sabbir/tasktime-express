const express       = require('express')
const router        = express.Router()


const autController = require('../../controllers/AuthController')
router.post("/register",autController.register)
router.post("/login",autController.login)
module.exports = router
