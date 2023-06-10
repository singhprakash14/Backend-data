const express = require("express");
const cors = require("cors")
const dotenv = require('dotenv')
dotenv.config()

const connection = require("./db/config");
const seatRouter = require("./routes/seats.route");
const port = process.env.PORT || 8000;


const app = express()

app.use(cors())

app.use(express.json())

app.use("/api",seatRouter)

app.get("/",(req,res)=>{
    res.send("hi")
})


app.listen(port,()=>{
    connection()
    console.log(`listning on port no ${port}`)
})