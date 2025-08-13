const express = require("express")
const mongoconnect = require("./Config/dbConnect.js")
const cors = require("cors")
const app = express()
const authRoute = require("./Routes/AuthRoute.js")
const TransactionRoute = require("./Routes/TransactionRoute.js")

app.use(express.json())
app.use(cors())

app.listen(8080,async () => {
    console.log("App started")
    await mongoconnect()
})

app.get("/",async (req,res) => {
    res.send("Welcome to expense tracker")
})

app.use("/auth",authRoute)
app.use("/transaction",TransactionRoute)