import db from "../models/index";
import moment from "moment/moment";
import placeService from "../services/placeService";
import ticketService from "../services/ticketService";

let getSummaryName = (data) => {
  let split = data.split(" ");
  if (split.length == 1) {
    if (split[0].length == 1) return split[0][0];
    else {
      return split[0][0] + split[0][1];
    }
  } else {
    split = split.slice(split.length - 2, split.length);
    return split[0][0] + split[1][0];
  }
};
let getHistoryPage = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let items = await db.History.findAll({
        include: {
          model: db.Ticket,
          required: true,
          include: { model: db.Trip, required: true },
        },
        where: { idUser: id },
        raw: true,
      });
      console.log(items);
      console.log(1);
      let tk = {};
      let provinces = await db.Province.findAll({
        raw: true,
      });
      let user = await db.User.findOne({
        where: { id: id },
        raw: true,
      });
      user.summaryName = await getSummaryName(user["name"]);
      let ProvinceMap = new Map();
      provinces.forEach((item) => {
        ProvinceMap.set(item.province, item.provinceName);
      });
      console.log(3);
      //   let tickets = await db.Ticket.findAll({
      //     where: { id: items["idTicket"] },
      //     raw: true,
      //   });

      tk.user = user;
      tk.items = items;
      tk.ProvincesMap = ProvinceMap;
      resolve(tk);
    } catch (e) {
      console.log(e);
    }
  });
};

let addHistory = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await db.History.create({
        idUser: data.idUser,
        idTicket: data.idTicket,
        idSeat: data.idSeat,
      });

      resolve(result);
    } catch (e) {
      console.log(e);
    }
  });
};

module.exports = {
  getHistoryPage,
  addHistory,
};
