const mongoose = require ("mongoose")

const transactionSchema = new mongoose.Schema({
    email:String,
    to:String,
    type:String,
    expense:String,
    amount:Number
})

const Transaction =  mongoose.model("Transaction",transactionSchema)

module.exports = Transaction