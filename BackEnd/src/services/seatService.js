import db from "../models/index";
import userService from "../services/userService"
import historyService from "../services/historyService"

let bookSeat = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(data)
            let id
            if (data.emailUser != '') {
                let user = await userService.getUserByEmail(data.emailUser)
                id = user.user.id
                console.log("user", user)
            }
            let idBooking = Date.now()

            let seat = await db.Seat.findOne({
                where: {
                    idUser: null,
                    idBooking: null,
                    idTicket: data.idTicket
                },
                raw: true
            })
            if (seat) {
                await db.Seat.upsert({
                    id: seat.id,
                    idTicket: data.idTicket,
                    idBooking: idBooking,
                    idUser: data.emailUser ? id : null,
                    fromPlace: data.fromPlace,
                    toPlace: data.toPlace
                });

                if (data.emailUser) {
                    let result = await historyService.addHistory({
                        idSeat: seat.id,
                        idUser: id,
                        idTicket: data.idTicket
                    })

                    console.log(result)
                }
            }


        } catch (e) {
            console.log(e);
        }
    })
}

let getIdBooking = (idSeat) => {
    return new Promise(async (resolve, reject) => {
        try {
            let idBooking = await db.Seat.findOne({
                where: {
                    id: idSeat
                },
                raw: true
            })
            resolve(idBooking.idBooking)
        } catch (e) {
            console.log(e);
        }
    })
}

module.exports = {
    bookSeat, getIdBooking
};

