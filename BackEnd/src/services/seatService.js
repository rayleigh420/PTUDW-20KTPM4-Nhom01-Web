import db from "../models/index";
import userService from "../services/userService"

let bookSeat = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(data)
            let id
            if (data.emailUser != '') {
                let user = await userService.getUserByEmail(data.emailUser)
                id = user.id
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
                    idUser: data.emailUser ? id : null
                });
            }

            // await seat.save();
            // if (seat) {
            //     seat.idBooking = idBooking
            //     if (data.emailUser) {
            //         let user = await userService.getUserByEmail(data.emailUser)
            //         seat.idUser = user.id
            //     }

            // } else {

            // }

            // console.log(seat)
        } catch (e) {
            console.log(e);
        }
    })
}

module.exports = {
    bookSeat,
};

