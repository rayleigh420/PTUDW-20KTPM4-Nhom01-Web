import db from "../models/index";
import { Op } from "Sequelize"
import userService from "../services/userService"
import historyService from "../services/historyService"
import placeService from "../services/placeService"

let getAllSeat = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let seat = await db.Seat.findAll({
                order: [
                    ['id', 'ASC'],
                ],
                where: {
                    idBooking: {
                        [Op.not]: null,
                    }
                },
                raw: true
            })

            seat.forEach(async item => {
                let fromID = await placeService.getIDByPlace(item.fromPlace)
                let toID = await placeService.getIDByPlace(item.toPlace)

                item.fromID = fromID
                item.toID = toID

                let ticket = await db.Ticket.findOne({
                    where: {
                        id: item.idTicket
                    },
                    raw: true
                })

                let trip = await db.Trip.findOne({
                    where: {
                        id: ticket.idTrip
                    },
                    raw: true
                })
                let fromList = await placeService.getListPlace(trip.from)
                let toList = await placeService.getListPlace(trip.to)

                item.fromList = fromList
                item.toList = toList
            })
            resolve(seat)
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

let updateSeat = async (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let seat = await db.Seat.findOne({
                where: {
                    id: id
                },
                raw: true
            })

            let from = await placeService.getPlacaNameById(data.fromPlace)
            let to = await placeService.getPlacaNameById(data.toPlace)

            let result = await db.Seat.upsert({
                id: seat.id,
                fromPlace: from,
                toPlace: to
            });

            if (result) {
                resolve(true)
            }
            else {
                resolve(false)
            }
        } catch (e) {
            console.log(e)
        }
    })
}

module.exports = {
    bookSeat, getIdBooking, checkBlank, getAllSeat, updateSeat
};

