const mongoose = require("mongoose")
require("dotenv").config()
const mongoUrl = process.env.MONGODB
const initializeDatabase = async() => {
    await mongoose.connect(mongoUrl).then(() => {
        console.log("Connected Successfully!")
    })
    .catch((error) => {
        console.log("Error in connecting to database")
    })
    
}
module.exports = initializeDatabase