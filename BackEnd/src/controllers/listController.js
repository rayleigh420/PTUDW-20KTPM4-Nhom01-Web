import { where } from "sequelize";
import db from "../models/index";

let getListPage = async (req, res) => {
    try {
        let items = await db.Ticket.findAll();
        console.log(items)
        // console.log("All:", JSON.stringify(items, null, 2));
        items.forEach(async (item) => {
            let dateStart = new Date(item.start);
            let dateEnd = new Date(item.end);
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
            item.timeStart = dateStart.getHours() + ":" + dateStart.getMinutes();
            item.timeEnd = dateEnd.getHours() + ":" + dateEnd.getMinutes();
            item.price = item.price + " VND/";
            item.black = seatBlank
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

