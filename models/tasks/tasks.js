const mongoose = require('mongoose')
const Schema = mongoose.Schema


const tasks = new Schema({
    events:{
        type:Schema.Types.Mixed,
    },
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
    user_id : String,
    active        : Boolean,
    // token: { type: String },
    expireAt:{
    }
},{timestamps:true})

const Tasks = mongoose.model("Tasks",tasks)

module.exports = Tasks
