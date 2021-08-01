const express = require('express')

const router = express.Router()


router.get("/", async(req,res)=>{
    res.send("get request from user")

})

module.exports = router