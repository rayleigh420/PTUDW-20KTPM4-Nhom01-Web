import db from "../models/index";
import moment from "moment/moment";
import ticketService from "../services/ticketService";
import userService from "../services/userService";
import historyService from "../services/historyService";

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
      let dateStart = moment(new Date(item["Ticket.start"]));
      let dateEnd = moment(new Date(item["Ticket.end"]));
      // let Trip = await db.Trip.findOne({
      //   where: { id: item["Ticket.idTrip"] },
      //   raw: true,
      // });
      item.timeStart = dateStart.hour() + ":" + dateStart.minute();
      item.timeEnd = dateEnd.hour() + ":" + dateEnd.minute();
      item.from = item["Ticket.Trip.from"];

      item.to = item["Ticket.Trip.to"];
      item.price = item["Ticket.price"] + " VND";
      // console.log(item["Ticket.id"]);
      item.dayStart = ticketService.getDayName(item["Ticket.dayStart"]);
    });
    console.log(history);
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
