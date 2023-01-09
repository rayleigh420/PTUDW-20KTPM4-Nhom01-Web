import db from "../models/index";
import userService from "../services/userService"
import historyService from "../services/historyService"

let getAllSeat = () => {
    return new Promise(async (resolve, reject) => {
        try {
            // let Ticket = await db.Ticket.findAll({
            //     raw: true,
            // });

            // console.log(Ticket)

            // Ticket.forEach(async (item) => {
            //     let seat = await db.Seat.findAll({
            //         where: {
            //             idTicket: item.id
            //         },
            //         raw: true
            //     })
            //     item.seat = seat
            // })

            let seat = await db.Seat.findAll({
                where: {
                    idTicket: 1
                },
                raw: true
            })

            console.log(seat)
        } catch (e) {
            console.log(e)
        }
    })
}

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

            let seat = await db.Seat.findAll({
                where: {
                    idUser: null,
                    idBooking: null,
                    idTicket: data.idTicket
                },
                limit: data.amount,
                raw: true
            })

            if (seat.length > 0) {
                seat.forEach(async (item) => {
                    let result = await db.Seat.upsert({
                        id: item.id,
                        idTicket: data.idTicket,
                        idBooking: idBooking,
                        idUser: data.emailUser ? id : null,
                        fromPlace: data.fromPlace,
                        toPlace: data.toPlace
                    });


                    if (data.emailUser) {
                        let result = await historyService.addHistory({
                            idSeat: item.id,
                            idUser: id,
                            idTicket: data.idTicket
                        })

                    }
                });
                resolve(true);
            }
            else {
                resolve(false);
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

let checkBlank = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let seat = await db.Seat.findAll({
                where: {
                    idUser: null,
                    idBooking: null,
                    idTicket: data.idTicket
                },
                limit: data.amount,
                raw: true
            })

            if (seat.length > 0) {
                resolve(true);
            }
            else {
                resolve(false)
            }
        } catch (e) {
            console.log(e);
        }
    })
}

module.exports = {
    bookSeat, getIdBooking, checkBlank, getAllSeat
};

