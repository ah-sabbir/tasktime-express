const express       = require('express')
const router        = express.Router()
const autController = require('../../controllers/AuthController')


router.post("/login",autController.login)
router.post("/register",autController.register)
router.post("/logout",autController.logout)


module.exports = router
