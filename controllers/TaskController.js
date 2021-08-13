const tasksModel = require('../models/taskTimeDataModel')

const getTasks = (req, res, next) => {
    return res.json({
        message: 'Task time is here'
    })
}

const postTasks = (req, res, next) =>{
    console.log("this is tasks post page")

    console.log(req.user_id)



    return res.json({
        message:'post tasks here'
    })
}

module.exports = {
    getTasks,
    postTasks
}
