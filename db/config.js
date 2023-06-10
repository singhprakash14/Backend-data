

const mongoose = require("mongoose")
const dotenv = require('dotenv')
dotenv.config()

const connection = async()=>{
    try {
        await mongoose.connect(process.env.URL)
        console.log("connect to db")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connection