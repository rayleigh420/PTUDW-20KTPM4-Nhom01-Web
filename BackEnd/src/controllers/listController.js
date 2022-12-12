import { where } from "sequelize";
import db from "../models/index";
import moment from "moment/moment";

let getListPage = async (req, res) => {
    try {
        let items = await db.Ticket.findAll({
            raw: true,
        });
        // console.log("All:", JSON.stringify(items, null, 2));
        items.forEach(async (item) => {
            let dateStart = moment(new Date(item.start));
            let dateEnd = moment(new Date(item.end));

            console.log(dateStart)
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
        res.locals.list = items;
        res.render("list", {
            style: "css/list.css",
        });
    } catch (e) {
        console.log(e);
    }
};

module.exports = {
    getListPage,
};

