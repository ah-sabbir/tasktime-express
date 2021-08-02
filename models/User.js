const mongoose = require('mongoose')
const Schema = mongoose.Schema


const userScama = new Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})

const User = mongoose.model("User",userScama)

module.exports = User