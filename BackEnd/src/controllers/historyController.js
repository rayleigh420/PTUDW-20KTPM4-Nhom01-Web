import db from "../models/index";
import moment from "moment/moment";
import ticketService from "../services/ticketService";
import userService from "../services/userService";
import historyService from "../services/historyService";
import seatService from "../services/seatService";

let getHistoryPage = async (req, res) => {
  try {
    let email = req.params.email;
    let user = await userService.getUserByEmail(email);
    let id = user.user.id;
    // console.log(id);
    // console.log(user);
    let history = await historyService.getHistoryPage(id);
    let userInfo = history.user;
    history.items.forEach(async (item) => {
      let idBooking = await seatService.getIdBooking(item.idSeat);
      let dateStart = moment(new Date(item["Ticket.start"]));
      let dateEnd = moment(new Date(item["Ticket.end"]));
      item.idBooking = idBooking;
      item.timeStart = dateStart.hour() + ":" + dateStart.minute();
      item.timeEnd = dateEnd.hour() + ":" + dateEnd.minute();
      item.from = history.ProvincesMap.get(item["Ticket.Trip.from"]);

      item.to = history.ProvincesMap.get(item["Ticket.Trip.to"]);
      item.price = item["Ticket.price"] + " VND";
      // console.log(item["Ticket.id"]);
      item.dayStart = ticketService.getDayName(item["Ticket.dayStart"]);
    });
    // console.log(history);
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
