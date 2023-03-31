const express=require("express");
const app=express();
const mongoose=require("mongoose");
const  path = require('path')
const newcolDB = require('./models/newcol')

// mongoose.connect("",{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// })

// const sch={
//     Account : Number,
//     DATE : Date,
//     TRANSACTION_DETAILS : String,
//     CHQ_NO : Number
// }
// const monmodel=mongoose.model("NEWCOL",sch);


const db = require('./db')
app.use(express.json());


app.get('/fetch/:DATE',function(req,res){
    fetchid=req.params.DATE;
    monmodel.find(({DATE:fetchid}),function(err,val){
        res.send(val);
    })

})

app.get('/' , function(req,res){
    res.send("Hello")
})
 
app.get('/data' , async function(req,res){
    const data = await newcolDB.find();
    res.json(data);
})

const __dirname1 = path.resolve();
if(process.env.NODE_ENV==='production'){
    app.use(express.static(path.join(__dirname1,'client/build')));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname1,"client","build","index.html"))
    })
}
else{
    app.get('/',(req,res)=>{
        res.send('api running')
    })
}

var server_port = process.env.YOUR_PORT || process.env.PORT || 8000;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
 
app.listen(server_port, server_host,(req,res)=>{
    console.log("Server is running :]")
})