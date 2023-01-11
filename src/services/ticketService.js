import db from "../models/index";
import moment from "moment/moment";
import { raw } from "express";

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
                attributes: ["name", "imgLogo"],
                where: { id: items["idCarOwner"] },
                raw: true,
            });
            let Trip = await db.Trip.findOne({
                where: { id: items["idTrip"] },
                raw: true,
            });
            tk.id = items.id;
            tk.carOwner = carOwner.name;
            tk.imgLogo = carOwner.imgLogo;
            tk.from = Trip.from;
            tk.to = Trip.to;
            tk.timeStart = dateStart.hour() + ":" + dateStart.minute();
            tk.timeEnd = dateEnd.hour() + ":" + dateEnd.minute();
            tk.price =
                new Intl.NumberFormat("vn-VN").format(items["price"]) + " VND/";
            tk.hours = moment.duration(dateEnd.diff(dateStart)).asHours();
            tk.dayStart = getDayName(dateStart);
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
                    attributes: ["name", "type", "imgLogo"],
                    where: { id: item["Tickets.idCarOwner"] },
                });

                let seatBlank = await db.Seat.findAndCountAll({
                    where: {
                        idTicket: item["Tickets.id"],
                        idUser: null,
                        idBooking: null,
                    },
                });

                if (seatBlank.count >= (data.amount ? parseInt(data.amount) : 1)) {
                    let tk = {};

                    tk.id = item["Tickets.id"];
                    tk.carOwnerName = carOwner.name;
                    tk.typeCar = carOwner.type;
                    tk.imgLogo = carOwner.imgLogo;
                    tk.from = item.from;
                    tk.to = item.to;
                    tk.timeStart = dateStart.hour() + ":" + dateStart.minute();
                    tk.timeEnd = dateEnd.hour() + ":" + dateEnd.minute();
                    tk.price =
                        new Intl.NumberFormat("vn-VN").format(item["Tickets.price"]) +
                        " VND/";
                    tk.blank = seatBlank.count;
                    tk.hours = moment.duration(dateEnd.diff(dateStart)).asHours();
                    tk.amount = data.amount ? data.amount : 1;

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
    day =
        day +
        date.format("ddd") +
        ", " +
        date.date() +
        " " +
        date.format("MMM") +
        " " +
        date.year();

    return day;
};

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

// let deleteTicketByTrip = (idTrip) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             let province = await db.Province.findOne({
//                 attributes: ["provinceName"],
//                 where: {
//                     province: name,
//                 },
//                 raw: true,
//             });
//             resolve(province.provinceName);
//         } catch (e) {
//             console.log(e);
//         }
//     });
// }

let addTicket = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let r = await db.Ticket.create({
                dayStart: data.start,
                start: data.start,
                end: data.end,
                price: data.price,
                idCarOwner: data.idCarOwner,
                idTrip: data.idTrip,
            });
            //get car type
            let item = await db.CarOwner.findOne({
                where: { id: data.idCarOwner },
                raw: true,
            });
            let type = item.type;
            let arr = [];
            let obb = { idBooking: null, idTicket: r.id, idUser: null };
            for (let i = 0; i < type; i++) {
                arr.push(obb);
            }
            arr.forEach((a) => {
                a.createdAt = new Date();
                a.updatedAt = new Date();
            });
            let r2 = await db.Seat.bulkCreate(arr);
            if (r2) {
                resolve(true);
            } else resolve(false);
        } catch (e) {
            console.log(e);
        }
    });
};

let getAllTicket = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let r = await db.Ticket.findAll({
                order: [["id", "ASC"]],
                raw: true,
            });
            let provinces = await db.Province.findAll({
                raw: true,
            });
            let ProvinceMap = new Map();
            provinces.forEach((item) => {
                ProvinceMap.set(item.province, item.provinceName);
            });
            r.forEach(async (co) => {
                co.startTime = new Date(co.start).toLocaleString();

                co.endTime = new Date(co.end).toLocaleString();

                co.carOwnerName = await db.CarOwner.findOne({
                    where: { id: co["idCarOwner"] },
                    raw: true,
                });
                co.carOwnerName = co.carOwnerName["name"];
                let trip = await db.Trip.findOne({
                    where: { id: co["idTrip"] },
                    raw: true,
                });
                co.FromTo =
                    ProvinceMap.get(trip.from) + " - " + ProvinceMap.get(trip.to);
            });
            resolve(r);
        } catch (e) {
            console.log(e);
        }
    });
};

let deleteTicket = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let result2 = await db.Seat.destroy({
                where: {
                    idTicket: id,
                },
                raw: true,
            });
            let result = await db.Ticket.destroy({
                where: {
                    id: id,
                },
                raw: true,
            });

            console.log(result);
            console.log(result2);

            if (result > 0 && result2 > 0) {
                resolve(true);
            } else {
                resolve(false);
            }
        } catch (e) {
            console.log(e);
        }
    });
};
let updateTicket = async (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let ticket = await db.Ticket.findOne({
                where: { id: id },
                raw: true,
            });
            let r = await db.Ticket.upsert({
                id: ticket.id,
                dayStart: data.start,
                ...data,
            });
            //delete old seat if diff car owner
            if (ticket.idCarOwner != data.idCarOwner) {
                console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
                let result2 = await db.Seat.destroy({
                    where: {
                        idTicket: id,
                    },
                    raw: true,
                });
                let item = await db.CarOwner.findOne({
                    where: { id: data.idCarOwner },
                    raw: true,
                });
                let type = item.type;
                let arr = [];
                let obb = { idBooking: null, idTicket: id, idUser: null };
                for (let i = 0; i < type; i++) {
                    arr.push(obb);
                }
                arr.forEach((a) => {
                    a.createdAt = new Date();
                    a.updatedAt = new Date();
                });
                let r2 = await db.Seat.bulkCreate(arr);
                if (r2 > 0 && r > 0) {
                    resolve(true);
                } else resolve(false);
            } else {
                if (r > 0) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            }
        } catch (e) {
            console.log(e);
        }
    });
};
module.exports = {
    getTicketInfo,
    getProvinceName,
    getWeekDay,
    getTicketInfoById,
    getDayName,
    addTicket,
    getAllTicket,
    deleteTicket,
    updateTicket,
};
