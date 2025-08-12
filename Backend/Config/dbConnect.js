const mongoose = require("mongoose")

const mongoconnect = async () => {
    try {
        await mongoose.connect("mongodb+srv://virajtlr2006:virajtlr2006@viraj.g7haxve.mongodb.net/ExpenseTracker?retryWrites=true&w=majority&appName=viraj")
        console.log("MongoDB connected successfully.")
    } catch (error) {
        console.log("Connection Failed.")
    }
}

module.exports = mongoconnect