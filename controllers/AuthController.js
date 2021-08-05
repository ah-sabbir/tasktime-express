const User      = require('../models/User')
const bcrypt    = require('bcryptjs')
const jwt       = require('jsonwebtoken')



const register = (req,res,next)=>{
    bcrypt.hash(req.body.password, 10, (err, hashedPass)=>{
        if(err){
            res.json({
                error:err
            })
        }
    })
    
    let user = new User({
        name: req.body.name,
        phone:req.body.phone,
        email: req.body.email,
        password: hashedPass
    })
    
    user.save()
    .then(user=>{
        res.json({
            message:'Successfully registered !'
        })
    })
    .catch(error=>{
        res.json({
            message: "error "
        })
    })
}


const login = (req,res,next)=>{
    var username = req.body.email
    var password = req.body.password

    User.findOne({$or: [{email:username},{phone:username}]})
    .then(user=>{
        if(user){
            bcrypt.compare(password,user.password,(err,result)=>{
                if(err){
                    res.json({
                        error:err
                    })
                }

                if(result){
                    let token = jwt.sign({name:user.name},'verysecretkey',{expiresIn:'1h'})
                    res.json({
                        message:"Login Successful!",
                        token
                    })
                    // User.insert({"token":token})
                }else{
                    res.json({
                        message:"password does not matched!"
                    })
                }
            })
        }else{
            res.json({
                message:"no user found"
            })
        }
    })
}


module.exports = {
    register, login
}