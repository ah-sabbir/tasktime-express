const mongoose = require('mongoose')
const Schema = mongoose.Schema


const userScama = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    super_user_id : String,
    active        : Boolean
    // token: { type: String },
},{timestamps:true})

const User = mongoose.model("User",userScama)

module.exports = User