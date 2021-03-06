const {adminUser, generalUser}     = require('../../models/users/users')
const bcrypt    = require('bcryptjs')
const jwt       = require('jsonwebtoken')


const register = (req,res,next)=>{
    
    bcrypt.hash(body.password, 10, (err, hashedPass)=>{
        if(err){
            res.json({
                error:err
            })
        }
        let user = new User({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            password:hashedPass
        })
        user.save()
            .then(result=>{
                res.status(201).json({
                    message:"user created",
                    user:result
                })
            })
            .catch(error=>{
                res.json({
                    error:error,
                    message: req.body.email
                })
            })
    })
}


const login = (req,res,next)=>{
    var username = req.body.email
    var password = req.body.password

    User.findOne({email:username})
    .then(user=>{
        if(user){
            bcrypt.compare(password,user.password,(err,result)=>{
                if(err){
                    res.json({
                        error:err
                    })
                }

                if(result){
                    let token = jwt.sign({name:user.email},'verysecretkey',{expiresIn:'24h'})
                    res.json({
                        message:"Login Successful!",
                        token
                    })
                    // User.insert({"token":token})
                }else{
                    res.json({
                        message:"password does not matched!",
                    })
                }
            })
        }else{
            res.json({
                message:"no user found",
            })
        }
    })
}


const logout = (req,res)=>{
    req.token = null
    res.clearCookie('jwt');
    res.redirect('api/login');
}

const addUser = (req,res){
    
}

module.exports = {
    register, login, logout
}