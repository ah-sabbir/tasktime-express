const mongoose = require('mongoose')
const Schema = mongoose.Schema

const admin = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role : {type:String, default: 'manager'},
    active        : Boolean
    // token: { type: String },
},{timestamps:true})

const general = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
    },
    password:{
        type:String,
        required:true
    },
    productivity:{
        type:String,
        default:"0%"
    },
    keystrokes:{
        type:String,
        default:"0%"
    },
    admin_id : String,
    active        : Boolean
},{timestamps:true})


const adminUser = mongoose.model("adminUser",admin)
const generalUser = mongoose.model("generalUser",general)

module.exports = {
    adminUser,
    generalUser
}