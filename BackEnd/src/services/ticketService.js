import db from "../models/index";
import moment from "moment/moment";

let getTicketInfoById = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let items = await db.Ticket.findByPk(id, {
        raw: true,
      });
      let tk = {};
      let dateStart = moment(new Date(items["start"]));
      let dateEnd = moment(new Date(items["end"]));
      let carOwner = await db.CarOwner.findOne({
        attributes: ["name"],
        where: { id: items["idCarOwner"] },
        raw: true,
      });
      let Trip = await db.Trip.findOne({
        where: { id: items["idTrip"] },
        raw: true,
      });
      tk.id = items.id;
      tk.carOwner = carOwner.name;
      tk.from = Trip.from;
      tk.to = Trip.to;
      tk.timeStart = dateStart.hour() + ":" + dateStart.minute();
      tk.timeEnd = dateEnd.hour() + ":" + dateEnd.minute();
      tk.price = items["price"] + " VND/";
      tk.hours = moment.duration(dateEnd.diff(dateStart)).asHours();
      tk.dayStart = getDayName(dateStart)
      resolve(tk);
    } catch (e) {
      console.log(e);
    }
  });
};

let getTicketInfo = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let items = await db.Trip.findAll({
        include: { model: db.Ticket, required: true },
        where: {
          from: data.from,
          to: data.to,
        },
        raw: true,
      });
      items = items.filter((item) => {
        return item["Tickets.dayStart"] == data.date;
      });
      console.log(items);

      let ticket = [];

      items.map(async (item) => {
        let dateStart = moment(new Date(item["Tickets.start"]));
        let dateEnd = moment(new Date(item["Tickets.end"]));

        let carOwner = await db.CarOwner.findOne({
          attributes: ["name", "type"],
          where: { id: item["Tickets.idCarOwner"] },
        });

        let seatBlank = await db.Seat.findAndCountAll({
          where: {
            idTicket: item["Tickets.id"],
            idUser: null,
          },
        });

        if (seatBlank.count == 0) {
          let tk = {};

          tk.id = item.id;
          tk.carOwnerName = carOwner.name;
          tk.typeCar = carOwner.type
          tk.from = item.from;
          tk.to = item.to;
          tk.timeStart = dateStart.hour() + ":" + dateStart.minute();
          tk.timeEnd = dateEnd.hour() + ":" + dateEnd.minute();
          tk.price = item["Tickets.price"] + " VND/";
          tk.blank = seatBlank.count;
          tk.hours = moment.duration(dateEnd.diff(dateStart)).asHours();

          ticket.push(tk);
        }

      });

      resolve(ticket);
    } catch (e) {
      console.log(e);
    }
  });
};

let getProvinceName = (name) => {
  return new Promise(async (resolve, reject) => {
    try {
      let province = await db.Province.findOne({
        attributes: ["provinceName"],
        where: {
          province: name,
        },
        raw: true,
      });
      resolve(province.provinceName);
    } catch (e) {
      console.log(e);
    }
  });
};

let getDayName = (date) => {
  let day = "";
  date = moment(date);
  day = day + date.format('ddd') + ", " + date.date() + " " + date.format('MMM') + " " + date.year();

  return day
}

let getWeekDay = (date) => {
  let day = "";
  date = moment(date);
  const weekDay = date.day() + 1;

  if (weekDay == 8) {
    day = "CN, ";
  } else {
    day = "T" + weekDay + ", ";
  }

  day = day + date.date() + " Thg " + (date.month() + 1) + " " + date.year();

  return day;
};

module.exports = {
  getTicketInfo,
  getProvinceName,
  getWeekDay,
  getTicketInfoById,
  getDayName
};
