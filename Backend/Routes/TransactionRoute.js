const express = require("express")
const Transaction = require("../Schema/TransactiionSchema.js")
const router = express.Router()

// Get list of transaction
router.get("/list/:email", async (req, res) => {
    const { email } = req.params
    console.log(email);

    const allTransactions = await Transaction.find({ "email": email })
    res.json({
        "allTransactions": allTransactions
    })
})

router.get("/singlelist/:id", async (req, res) => {
    const { id } = req.params
    console.log(id);

    const allTransactions = await Transaction.findById(id)
    res.json({
        "allTransactions": allTransactions
    })
})

// Add new transaction
router.post("/entry", async (req, res) => {
    const { email, to, type, expense, amount } = req.body

    const newTransaction = new Transaction({
        "email": email,
        "to": to,
        "type": type,
        "expense": expense,
        "amount": amount
    })
    await newTransaction.save()
    res.json({
        "message": "Successful Entry"
    })
})

//Delete transaction
router.post("/delete", async (req, res) => {
    const { id } = req.body
    const deleteTransaction = await Transaction.findByIdAndDelete(id)
    res.json({
        "message": "Transaction deletd successfully"
    })
})

router.post("/history/update", async (req, res) => {
    const { id,
        to,
        type,
        expense,
        amount } = req.body
        
        console.log( to,
            type,
            expense,
            amount)
    const updateHistory = await Transaction.findByIdAndUpdate(id,{
        to,
        type,
        expense,
        amount
    })
    res.json({
        "message":"Transaction updated successfully"
    })
})

module.exports = router;


