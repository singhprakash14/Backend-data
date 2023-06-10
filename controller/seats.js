const seatModel = require("../model/seats.model")

const getSeats = async (req, res) => {
    try {
        let data = await seatModel.find()
        res.send(data)

    } catch (error) {
        res.send(error)
    }

}



// const postSeat = async (req, res) => {
//     try {
//         await seatModel.insertMany([
//             { seatNo:51,isBooked:false},
//             { seatNo:52,isBooked:false},
//             { seatNo:53,isBooked:false},
//             { seatNo:54,isBooked:false},
//             { seatNo:55,isBooked:false},
//             { seatNo:56,isBooked:false},
//             { seatNo:57,isBooked:false},
//             { seatNo:58,isBooked:false},
//             { seatNo:59,isBooked:false},
//             { seatNo:60,isBooked:false},
//             { seatNo:61,isBooked:false},
//             { seatNo:62,isBooked:false},
//             { seatNo:63,isBooked:false},
//             { seatNo:64,isBooked:false},
//             { seatNo:65,isBooked:false},
//             { seatNo:66,isBooked:false},
//             { seatNo:67,isBooked:false},
//             { seatNo:68,isBooked:false},
//             { seatNo:69,isBooked:false},
//             { seatNo:70,isBooked:false},
//             { seatNo:71,isBooked:false},
//             { seatNo:72,isBooked:false},
//             { seatNo:73,isBooked:false},
//             { seatNo:74,isBooked:false},
//             { seatNo:75,isBooked:false},
//             { seatNo:76,isBooked:false},
//             { seatNo:77,isBooked:false},
//             { seatNo:78,isBooked:false},
//             { seatNo:79,isBooked:false},
//             { seatNo:80,isBooked:false},
//         ])
//         res.send("addddddddd")
//     } catch (error) {
//         res.send(error)
//     }
// }


const bookSeat = async (req, res) => {

    let seats = req.query.noOfSeats
    let seat = 1

    if (seats <= 7) {
        try {
            for (let i = 0; i < seats; i++) {
                let isItBook = await seatModel.find({ seatNo: seat })
                if (isItBook[0].isBooked == false) {
                    let data = await seatModel.updateOne({ seatNo: seat }, {
                        isBooked: true
                    });
                    seat++
                } else {
                    seats++
                    seat++
                }
            }
            res.send("booked succesfully")
        } catch (e) {
            res.send("error", e)
        }
    } else {
        res.send("cant reserve more than 7 seats at a time")
    }
}



const cancelSeat = async (req, res) => {
    let seat = req.query.seatNO
    try {
        if(seat > 0 && seat <= 80){
            let data = await seatModel.updateOne({ seatNo: seat }, {
                isBooked: false
            });
            res.send(data)
        }else{
            res.send("please add correct seat number")
        }
    } catch (error) {
        res.send(e)
    }
    
    
}


module.exports = { getSeats, bookSeat, cancelSeat } 