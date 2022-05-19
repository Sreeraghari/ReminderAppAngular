const db = require('./db')

// register  
const register = (uname, userid, pswd) => {

    return db.Data.findOne({ userid })
        .then(user => {
            if (user) {
                return {
                    statuscode: 422,
                    status: false,
                    message: "user already exist.... please Login"

                }
            }
            else {
                const newUser = new db.Data({

                    uname,
                    userid,
                    pswd,
                    event: []

                })
                newUser.save()
                return {
                    statuscode: 200,
                    status: true,
                    message: "Registered successfully"

                }
            }
        })
}

// login

// login

const login = (userid, pswd) => {
    return db.Data.findOne({ userid, pswd })
        .then(user => {
            if (user) {
                uid = userid
                Uname = user.uname


                return {
                    statuscode: 200,
                    status: true,
                    message: "successfully Login",
                    uid,
                    Uname
                }

            }
            else {
                return {
                    statuscode: 422,
                    status: false,
                    message: "incorrect passwordt /Account Number"

                }
            }


        })
}

// /add event
const addEvent = (userid,date,descr) => {
    // asynchronous
  
    return db.Data.findOne({userid })
      .then(user => {
  
        if (user) {
          user.event.push({
            date,
            descr
          })
          user.save()
          return {
            statuscode: 200,
            status: true,
            message:  "Event Added Successfully"
          }
        }
        else {
          return {
            statuscode: 422,
            status: false,
            message: "user doesnot exist"
  
          }
        }
      })
  
  }
  
// View Event

const viewEvent=(userid)=>{

    return db.Data.findOne({userid})
    .then(user=>{
      if(user) {
        return {
          statuscode:200,
          status:true,
          Evnt:user.event
        }
      }else{
        return{
          statuscode:422,
          status:false,
          message:"User Doesnt Exist"
        }
      }
    })
  }
  


module.exports = {
    register,
    login,
    addEvent,
    viewEvent
}
