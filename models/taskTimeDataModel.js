const mongoose = require('mongoose')
const Schema = mongoose.Schema


const tasktimeDataSchema = new Schema({
    imageName:{
        type:String,
    },
    pid:{
        type:String,
    },
    sessionName:{
        type:String,
    },
    memUsage:{
        type:String,
    },
    status:{
        type:String,
    },
    username: {
        type:String
    },
    cpuTime:{
        type:String,
    },
    windowTitle:{
        type:String,
    },
    super_user_id : String,
    active        : Boolean
    // token: { type: String },
},{timestamps:true})

const TasksDB = mongoose.model("Tasks",tasktimeDataSchema)

module.exports = TasksDB
