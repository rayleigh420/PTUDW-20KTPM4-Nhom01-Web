import { where } from "sequelize";
import db from "../models/index";
import countries from '../data/country'
import provinceService from "../services/provinceService";
import ticketService from "../services/ticketService";
import placeService from "../services/placeService";

let getHomePage = async (req, res) => {
  try {
    let provinces = await provinceService.getProvince();
    res.render("home", {
      style: ["home.css"],
      js: ["navigation.js", "home.js"],
      provinces: provinces,
    });
  } catch (e) {
    console.log(e);
  }
};

let getSignUpPage = async (req, res) => {
  try {
    res.render("signUp", {
      style: ["signUp.css"],
      js: ["signUp.js"],
    });
  } catch (e) {
    console.log(e);
  }
};

let getSignInPage = async (req, res) => {
  try {
    res.render("signIn", {
      style: ["signIn.css"],
      js: ["signIn.js"],
    });
  } catch (e) {
    console.log(e);
  }
};

// let getListPage = async (req, res) => {
//   try {
//     let items = await db.Ticket.findAll();
//     // console.log("All:", JSON.stringify(items, null, 2));
//     items.forEach(async (item) => {
//       let dateStart = new Date(item.start);
//       let dateEnd = new Date(item.end);
//       let carOwner = await db.CarOwner.findOne({
//         attributes: ["name"],
//         where: { id: item.idCarOwner },
//       });
//       let FromTo = await db.Trip.findOne({
//         where: { id: item.idTrip },
//       });
//       item.carOwnerName = carOwner.name;
//       item.from = FromTo.from;
//       item.to = FromTo.to;
//       item.timeStart = dateStart.getHours() + ":" + dateStart.getMinutes();
//       item.timeEnd = dateEnd.getHours() + ":" + dateEnd.getMinutes();
//       item.price = item.price + " VND/";
//     });
//     res.locals.list = items;
//     res.render("list", {
//       style: "css/list.css",
//     });
//   } catch (e) {
//     console.log(e);
//   }
// };

let getInfoFormPage = async (req, res) => {
  try {
    let idTicket = req.params.idTicket;
    let ticket = await ticketService.getTicketInfoById(idTicket);
    let fromList = await placeService.getListPlace(ticket.from)
    let toList = await placeService.getListPlace(ticket.to)


    res.render("info_form", {
      style: ["info_form.css"],
      js: ["navigation.js", "info_form.js"],
      id: idTicket,
      fromList: fromList,
      toList: toList,
      date: ticket.dayStart,
      countries: countries.countries,
      ...ticket
    });
  } catch (e) {
    console.log(e);
  }
};

let getInfoCheckPage = async (req, res) => {
  try {
    console.log(req.body)
    let idTicket = req.body.id
    let ticket = await ticketService.getTicketInfoById(idTicket);
    let fromPlace = await placeService.getPlacaNameById(req.body.fromPlace)
    console.log(fromPlace.places)
    // let toPlace = await placeService.getPlacaNameById(req.body.toPlace)

    res.render("info_check", {
      style: ["info_check.css"],
      js: ["navigation.js"],
      id: idTicket,
      date: ticket.dayStart,
      ...req.body,
      fromPlaces: fromPlace.places,
      // toPlace: toPlace.places,
      ...ticket
    });
  } catch (e) {
    console.log(e);
  }
};

let getHistoryPage = async (req, res) => {
  try {
    res.render("history", {
      style: ["history.css"],
      js: ["navigation.js"],
    });
  } catch (e) {
    console.log(e);
  }
};

// let getDetailPage = async (req, res) => {
//   try {
//     res.render("detail", {
//       style: "css/detail.css",
//       js: ["detail.js"]
//     });
//   } catch (e) {
//     console.log(e);
//   }
// };

module.exports = {
  getHomePage,
  getInfoFormPage,
  getInfoCheckPage,
  // getListPage,
  getSignInPage,
  getSignUpPage,
  getHistoryPage,
  // getDetailPage,
};
