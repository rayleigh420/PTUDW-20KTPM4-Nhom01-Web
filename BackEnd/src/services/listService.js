import db from "../models/index";
import moment from "moment/moment";
import { Sequelize } from "sequelize";

let getTicketInfo = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(data);
            let items = await db.Ticket.findAll({
                // attributes: {
                //     include: [
                //         "id",
                //         [
                //             Sequelize.fn(
                //                 "DATE_FORMAT",
                //                 Sequelize.col("start"),
                //                 "%Y-%m-%d"
                //             ),
                //             "start",
                //         ],
                //         "end",
                //         "price",
                //     ],
                // },
                raw: true,
            });
            // console.log(items)
            items.map(async (item) => {
                let dateStart = moment(new Date(item.start));
                let dateEnd = moment(new Date(item.end));

                let carOwner = await db.CarOwner.findOne({
                    attributes: ["name"],
                    where: { id: item.idCarOwner },
                });

                let FromTo = await db.Trip.findOne({
                    where: { id: item.idTrip },
                });

                let seatBlank = await db.Seat.findAndCountAll({
                    where: {
                        idTicket: item.id,
                        idUser: null
                    }
                })

                item.carOwnerName = carOwner.name;
                item.from = FromTo.from;
                item.to = FromTo.to;
                item.timeStart = dateStart.hour() + ":" + dateStart.minute();
                item.timeEnd = dateEnd.hour() + ":" + dateEnd.minute();
                item.price = item.price + " VND/";
                item.black = seatBlank
                item.hours = moment.duration(dateEnd.diff(dateStart)).asHours();
            });

            resolve(items)
        } catch (e) {
            console.log(e)
        }
    })
}

module.exports = {
    getTicketInfo
}