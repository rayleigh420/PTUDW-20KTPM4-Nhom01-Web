import db from "../models/index";
import moment from "moment/moment";
import ticketService from "../services/ticketService";
import userService from "../services/userService";
import historyService from "../services/historyService";
import seatService from "../services/seatService";

let getHistoryPage = async (req, res) => {
    try {
        // let email = req.params.email;
        // let user = await userService.getUserByEmail(email);
        let id = req.params.id;
        // console.log(id);
        // console.log(user);
        let idBookingMap = new Map();
        let newItem = [];
        let history = await historyService.getHistoryPage(id);
        let userInfo = history.user;
        history.items.forEach(async (item) => {
            let idBooking = await seatService.getIdBooking(item.idSeat);
            let amt = await db.Seat.count({
                where: { idBooking: idBooking },
            });
            let dateStart = moment(new Date(item["Ticket.start"]));
            let dateEnd = moment(new Date(item["Ticket.end"]));
            if (idBooking == null) idBooking = 0;
            item.idBooking = idBooking;
            item.timeStart = dateStart.hour() + ":" + dateStart.minute();
            item.timeEnd = dateEnd.hour() + ":" + dateEnd.minute();
            item.from = history.ProvincesMap.get(item["Ticket.Trip.from"]);
            item.to = history.ProvincesMap.get(item["Ticket.Trip.to"]);
            // console.log(item["Ticket.id"]);
            item.dayStart = ticketService.getDayName(item["Ticket.dayStart"]);
            item.amt = amt || 0;
            item.price = new Intl.NumberFormat('vn-VN').format(item["Ticket.price"] * item.amt) + " VND";
            if (idBookingMap.get(idBooking) == null) {
                idBookingMap.set(idBooking, 1);
                newItem.push(item);
            }
            // console.log(amt)
        });
        history.items = newItem;

        console.log(idBookingMap);

        res.render("history", {
            style: ["history.css"],
            js: ["navigation.js", "history.js"],
            ...userInfo,
            tickets: history.items,
            // rates: items.rates,
            // carOwnerStar: items.stars,
        });
    } catch (e) {
        console.log(e);
    }
};

module.exports = {
    getHistoryPage,
};
