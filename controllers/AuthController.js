const User      = require('../models/User')
const bcrypt    = require('bcryptjs')
const jwt       = require('jsonwebtoken')



const register = async (req,res,next)=>{
    let body = {
       "name": req.body.name,
        "email": req.body.email,
        "password":req.body.password
    }

    if (!(body.email && body.password)) {
        return res.status(400).send({ error: "Data not formatted properly" });
    }

    //   const user = new User(body);
    User.findOne({email:body.email})
    .then(user=> {
        if(user){
            res.json({
                error:"user already exist"
            })
        }
    })

    //   .then(u=> res.json({error:"user already exist"}))
      
    const salt = await bcrypt.genSalt(10);
    const user = new User(body)
    user.password =  await bcrypt.hash(user.password, salt);
    await user.save().then((doc) => res.status(201).send(doc));
    
}



// const register = (req,res,next)=>{
//     if(req.body.name && req.body.phone && req.body.email){
//         console.log(req.body)
//         res.json({
//             "body":req.body
//         })
//     }
    // bcrypt.hash(req.body.password, 10, (err, hashedPass)=>{
    //     if(err){
    //         res.json({
    //             error:err
    //         })
    //     }
    //     let user = new User({
    //         name: req.body.name,
    //         phone:req.body.phone,
    //         email: req.body.email,
    //         password: hashedPass
    //     })
        
    //     user.save()
    //     .then(user=>{
    //         res.json({
    //             message:'Successfully registered !'
    //         })
    //     })
    //     .catch(error=>{
    //         res.json({
    //             message: "error "
    //         })
    //     })
    // })
// }


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