const { exists } = require('../models/taskTimeDataModel')
const tasksModel = require('../models/taskTimeDataModel')

const getTasks = (req, res, next) => {
    return res.json({
        message: 'Task time is here'
    })
}

const postTasks = async (req, res, next) =>{
    // console.log(req.body)

    const isExist = tasksModel.exists({ windowTitle: req.body.windowTitle }, (err,response)=>{
        if(!response){
            let task = new tasksModel({
                imageName: req.body.imageName,
                pid: req.body.pid,
                sessionName: req.body.sessionName,
                sessionNumber: req.body.sessionNumber,
                memUsage: req.body.memUsage,
                status: req.body.status,
                username: req.body.username,
                cpuTime: req.body.cpuTime,
                windowTitle: req.body.windowTitle,
                super_user_id:req.user_id.name
            })
            task.save()
                .then(ress=> true)
        }else{
            return "doc is exists"
        }
    })
    



    return res.json({
        message:'post tasks here',
        status: isExist
    })
}

module.exports = {
    getTasks,
    postTasks
}
