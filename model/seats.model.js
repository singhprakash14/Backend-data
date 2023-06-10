
const mongoose = require("mongoose")

seatSchema = new mongoose.Schema({
    seatNo : Number,
    isBooked : Boolean,
})

seatModel = mongoose.model("seat",seatSchema)

module.exports = seatModel;
