import db from "../models/index";
import moment from "moment/moment";
import { Op } from "sequelize";

import placeService from "../services/placeService";
let getDetailPage = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let items = await db.Ticket.findByPk(id, {
        raw: true,
      });
      let tk = {};
      let carOwner = await db.CarOwner.findOne({
        where: { id: items["idCarOwner"] },
        raw: true,
      });
      let Trip = await db.Trip.findOne({
        where: { id: items["idTrip"] },
        raw: true,
      });
      // province: {
      //   [Op.like]: "%" + Trip["from"] + "%",
      // },
      let FromDB = await db.Place.findAll({
        limit: 3,
        where: {
          province: Trip["from"],
        },
        raw: true,
      });
      let ToDB = await db.Place.findAll({
        limit: 3,
        where: {
          province: Trip["to"],
        },
        raw: true,
      });

      // tk.push(carOwner.id);
      // tk.push(items);
      tk.carOwner = carOwner;
      tk.FromProvince = Trip["from"];
      tk.ToProvince = Trip["to"];
      // console.log(Trip["from"]);
      // console.log(Trip["to"]);
      tk.FromDB = FromDB;
      tk.ToDB = ToDB;
      // console.log(FromDB);
      // console.log(ToDB);

      resolve(tk);
    } catch (e) {
      console.log(e);
    }
  });
};

module.exports = {
  getDetailPage,
};
