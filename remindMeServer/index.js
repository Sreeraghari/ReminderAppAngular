const express=require('express')

const app=express()

const ds=require('./services/dataservice')

app.use(express.json())

const cors=require('cors')
const req = require('express/lib/request')
const res = require('express/lib/response')

app.use(cors({
    origin:'http://localhost:4200'
}))

app.listen(3000, () => {
    console.log("server started at port no:3000");
})

// Register API

app.post('/register',(req,res)=>{
    ds.register(req.body.uname,req.body.userid,req.body.pswd)
    .then(result=>{
        res.status(result.statuscode).json(result)
    })
})

// Login API


app.post('/login', (req, res) => {
    ds.login(req.body.userid, req.body.pswd)
        .then(result => {
            res.status(result.statuscode).json(result);

        })

})

//Add Event API

app.post('/addEvent',(req,res)=>{
    ds.addEvent(req.body.userid,req.body.date,req.body.descr)
    .then(result=>{
        res.status(res.statusCode).json(result)
    })
})


//View Event API

app.post('/viewEvent',(req,res)=>{
    ds.viewEvent(req.body.userid)
    .then(result=>{
        res.status(res.statusCode).json(result)
    })
})


