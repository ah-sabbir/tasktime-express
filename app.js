const express = require('express')
const mongoose = require('mongoose')
const uri = "mongodb+srv://ahsabbir103:sabbir.setpass.mongodb@tasktime.lypfc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const app = express()

mongoose.connect(uri, { useNewUrlParser: true})

const conn = mongoose.connection

conn.on('open',()=>{
    console.log("connected ...")
})

const userRouters = require("./routers/users")
app.use('/user',userRouters)


app.listen(9000,()=>{
    console.log("server started ...")
})




// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://ahsabbir103:<password>@tasktime.lypfc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });