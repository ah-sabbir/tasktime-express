const { exists } = require('../models/taskTimeDataModel')
const tasksModel = require('../models/taskTimeDataModel')

const getTasks = (req, res, next) => {
    return res.json({
        message: 'Task time is here'
    })
}

const postTasks = async (req, res, next) =>{
    // console.log(req.body)


    tasksModel.findOne({ windowTitle: req.body.windowTitle }).select("_id").lean().then(result => {
        if (!result) {
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
            tasksModel.findOne({_id:result._id}, (err,obj)=> { 
                if(parseInt(obj.cpuTime) !== parseInt(req.body.cpuTime)){
                    let oldCPU_time = parseInt(obj.cpuTime)
                    let newCPU_time = parseInt(req.body.cpuTime) + oldCPU_time
                    tasksModel.updateOne({_id:obj._id}, {$set: { cpuTime: newCPU_time.toString() }}, {upsert: true},(err,ob)=> true)
                }    
            })
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
