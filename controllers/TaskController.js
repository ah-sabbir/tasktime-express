const { exists } = require('../models/taskTimeDataModel')
const tasksModel = require('../models/taskTimeDataModel')

const getTasks = (req, res, next) => {
    
    return res.json({
        message: 'Task time is here'
    })
}

const postTasks = async (req, res, next) =>{
    // console.log(req.body)


    tasksModel.findOne({ windowTitle: req.body.windowTitle }).select("_id").lean().then( async(result) => {
        if (!result) {
            let task = new tasksModel({
                tasks: req.body.events,
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
            task.markModified('anything');
            task.save()
                .then(ress=> true)
        }else{
            let task = await  tasksModel.findById(result._id)
            if(parseInt(task.cpuTime) !== parseInt(req.body.cpuTime)){
                task.cpuTime = parseInt(task.cpuTime)+parseInt(req.body.cpuTime)
            }
            task.events = req.body.events
            task.markModified('anything');
            task.save()
        }
    });

    return res.json({
        message:'post tasks here'
    })
}

module.exports = {
    getTasks,
    postTasks
}
