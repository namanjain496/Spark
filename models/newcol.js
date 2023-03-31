const mongoose = require('mongoose')

const sch={
    Account : Number,
    DATE : Date,
    TRANSACTION_DETAILS : String,
    CHQ_NO : Number
}
const monmodel=mongoose.model("NEWCOL",sch);
module.exports = monmodel
