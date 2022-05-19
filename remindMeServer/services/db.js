const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/remindMe", {

    useNewUrlParser: true

})

const Data=mongoose.model('Data',{
    uname:String,
    userid:Number,
    pswd:String,
    event:[]
})

module.exports={
    Data
}