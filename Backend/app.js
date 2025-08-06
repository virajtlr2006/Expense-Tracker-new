const express = require("express")
const mongoconnect = require("./Config/dbConnect.js")
const cors = require("cors")
const app = express()

app.listen(8080,async () => {
    console.log("App started")
    await mongoconnect()
})

app.get("/",async (req,res) => {
    console.log("Welcome to expense tracker")
})