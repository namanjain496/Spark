const mongoose = require('mongoose')


var mongourl = 'mongodb://localhost:27017/admin'

mongoose.connect(mongourl,{
    useUnifiedTopology:true,
    useNewUrlParser: true
})

var db = mongoose.connection

db.on('connected' , ()=>{
    console.log('mongoDB connected :]')
})

db.on('error' ,()=>{
    console.log("mongoDB connection failed")
})

module.exports = mongoose
