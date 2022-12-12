import { where } from "sequelize";
import db from "../models/index";
import province from '../data/provinces'

let getHomePage = async (req, res) => {
  try {
    res.render("home", {
      style: "css/home.css",
      js: ["navigation.js", "home.js"],
      province: province.province
    });
  } catch (e) {
    console.log(e);
  }
};

let getSignUpPage = async (req, res) => {
  try {
    res.render("signUp", {
      style: "css/signUp.css",
      js: ["js/signUp.js"],
    });
  } catch (e) {
    console.log(e);
  }
};

let getSignInPage = async (req, res) => {
  try {
    res.render("signIn", {
      style: "css/signIn.css",
      js: ["signIn.js"],
    });
  } catch (e) {
    console.log(e);
  }
};

let getListPage = async (req, res) => {
  try {
    let items = await db.Ticket.findAll();
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
      item.carOwnerName = carOwner.name;
      item.from = FromTo.from;
      item.to = FromTo.to;
      item.timeStart = dateStart.getHours() + ":" + dateStart.getMinutes();
      item.timeEnd = dateEnd.getHours() + ":" + dateEnd.getMinutes();
      item.price = item.price + " VND/";
    });
    res.locals.list = items;
    res.render("list", {
      style: "css/list.css",
    });
  } catch (e) {
    console.log(e);
  }
};

let getInfoFormPage = async (req, res) => {
  try {
    res.render("info_form", {
      style: "css/info_form.css",
    });
  } catch (e) {
    console.log(e);
  }
};

let getInfoCheckPage = async (req, res) => {
  try {
    res.render("info_check", {
      style: "css/info_check.css",
    });
  } catch (e) {
    console.log(e);
  }
};

let getHistoryPage = async (req, res) => {
  try {
    res.render("history", {
      style: "css/history.css",
    });
  } catch (e) {
    console.log(e);
  }
};

let getDetailPage = async (req, res) => {
  try {
    res.render("detail", {
      style: "css/detail.css",
      js: ["detail.js"]
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getHomePage,
  getInfoFormPage,
  getInfoCheckPage,
  getListPage,
  getSignInPage,
  getSignUpPage,
  getHistoryPage,
  getDetailPage,
};
