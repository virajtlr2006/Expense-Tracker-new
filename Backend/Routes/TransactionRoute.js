const express = require("express")
const Transaction = require("../Schema/TransactiionSchema.js")
const router = express.Router()

// Get list of transaction
router.get("/list",async (req,res) => {
    const {email}= req.params
    const allTransactions = await Transaction.find({"email":email})
    res.json({
        "allTransactions":allTransactions
    })
    
})

// Add new transaction
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