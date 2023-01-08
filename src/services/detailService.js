import db from "../models/index";
import moment from "moment/moment";
import { Op } from "sequelize";

import placeService from "../services/placeService";
let getDetailPage = async (id, amount) => {
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
      // let Rates = await db.Rate.findAll({
      //   where: { idCarOwner: items["idCarOwner"] },
      //   raw: true,
      // });
      // let stars = 0;
      // Rates.forEach(async (rate) => {
      //   stars += rate.star;
      //   let usname = await db.User.findOne({
      //     attributes: ["name"],
      //     where: { id: rate["idUser"] },
      //     raw: true,
      //   });
      //   rate.username = usname["name"];
      // });
      // let star = (stars * 1.0) / Rates.length;

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
      tk.price = new Intl.NumberFormat('vn-VN').format(parseInt(items["price"]) * parseInt(amount));
      tk.phone = carOwner["phone"];
      tk.address = carOwner["address"].split("/");
      // console.log(Trip["from"]);
      // console.log(Trip["to"]);
      tk.FromDB = FromDB;
      tk.ToDB = ToDB;
      // tk.stars = star;
      // tk.rates = Rates;
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
