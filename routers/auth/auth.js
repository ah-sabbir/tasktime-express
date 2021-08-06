const express       = require('express')
const router        = express.Router()
const autController = require('../../controllers/AuthController')


router.post("/login",autController.login)
router.post("/register",autController.register)

// router.post("/register",(req,res,next)=>{
//     res.json("hello registration")
//     console.log("registration field")
// })

module.exports = router
