const express = require("express")
const Transaction = require("../Schema/TransactiionSchema.js")
const router = express.Router()
 router.post("/entry",async (req,res) => {
    const{from,to,type,expense,amount} = req.body
    console.log(from,to,type,expense)
    
    const newTransaction = new Transaction({
        "from":from,
        "to":to,
        "type":type,
        "expense":expense,
        "amount":amount
    })
    await newTransaction.save()
    res.json({
        "message":"Successful Entry"
    })
 })

 module.exports= router