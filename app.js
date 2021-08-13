const express =     require('express')
const mongoose =    require('mongoose')
const AuthRoute =  require('./routers/auth/auth')
const authorized = require('./middleware/authorization-middleware')
const TaskRoute = require('./routers/tasktime/taskTime')

const app = express()
app.use(express.json())


const uri = "mongodb+srv://ahsabbir103:sabbir.setpass.mongodb@tasktime.lypfc.mongodb.net/TaskTimeDatabase?retryWrites=true&w=majority";
mongoose.connect(uri, {      
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false, 
})

const conn = mongoose.connection
conn.on('open',()=>{
    console.log("connected ...")
})




// *******************    All routes ***********
app.use('/api',AuthRoute)
app.use('/api', TaskRoute)

// app.get('/',(req,res)=>{
//     const authHeader = req.headers.authorization;
//     console.log(authHeader)
//     res.send("hello tasktime")
// })
// app.use('/user',userRouters)
// app.use('/registration',createUsers)



app.listen(process.env.PORT || 2000)

