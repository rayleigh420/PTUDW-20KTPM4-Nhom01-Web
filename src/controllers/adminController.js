import carOwnerService from "../services/carOwnerService";
import tripService from "../services/tripService";
import seatService from "../services/seatService";
import provinceService from "../services/provinceService";
import ticketService from "../services/ticketService";
import db from "../models";

let getAdminPage = async (req, res) => {
  try {
    res.render("admin", {
      layout: "adminLayout",
      style: ["admin.css"],
      // js: ["carOwnerAdmin.js"],
    });
  } catch (e) {
    console.log(e);
  }
};

let getCarOwnerAdmin = async (req, res) => {
  try {
    let car = await carOwnerService.getAllCarOwner();
    console.log(car);

    res.render("admin/adminCarOwner", {
      layout: "adminLayout",
      // style: ["admin.css"],
      js: ["carOwnerAdmin.js"],
      car: car,
    });
  } catch (e) {
    console.log(e);
  }
};

let addCarOwner = async (req, res) => {
  try {
    let result = await carOwnerService.addCarOwner(req.body);
    if (result) {
      res.redirect("/admin/adminCarOwner");
    }
  } catch (e) {
    console.log(e);
  }
};

let updateCarOwner = async (req, res) => {
  try {
    let result = await carOwnerService.updateCarOwner(req.params.id, req.body);
    if (result) {
      res.redirect("/admin/adminCarOwner");
    }
  } catch (e) {
    console.log(e);
  }
};

let deleteCarOwner = async (req, res) => {
  try {
    let result = await carOwnerService.deleteCarOwner(req.params.id);
    if (result) {
      res.redirect("/admin/adminCarOwner");
    }
  } catch (e) {
    console.log(e);
  }
};

let getTripAdmin = async (req, res) => {
  try {
    let trip = await tripService.getAllTrip();
    let provinces = await provinceService.getProvince();

    res.render("admin/adminTrip", {
      layout: "adminLayout",
      // style: ["adminCarOwner.css"],
      js: ["tripAdmin.js"],
      trip: trip,
      provinces: provinces,
    });
  } catch (e) {
    console.log(e);
  }
};

let updateTrip = async (req, res) => {
  try {
    let result = await tripService.updateTrip(req.params.id, req.body);
    if (result) {
      res.redirect("/admin/adminTrip");
    }
  } catch (e) {
    console.log(e);
  }
};

let deleteTrip = async (req, res) => {
  try {
    let result = await tripService.deleteTrip(req.params.id);
    if (result) {
      res.redirect("/admin/adminTrip");
    }
  } catch (e) {
    console.log(e);
  }
};

let addTrip = async (req, res) => {
  try {
    let result = await tripService.addTrip(req.body);
    if (result) {
      res.redirect("/admin/adminTrip");
    }
  } catch (e) {
    console.log(e);
  }
};

let getSeatAdmin = async (req, res) => {
  try {
    let seat = await seatService.getAllSeat();
    console.log(seat);
    // let provinces = await provinceService.getProvince();

    res.render("admin/adminSeat", {
      layout: "adminLayout",
      // style: ["adminCarOwner.css"],
      js: ["seatAdmin.js"],
      // trip: trip,
      // provinces: provinces
      seat: seat,
    });
  } catch (e) {
    console.log(e);
  }
};

let getTicketAdmin = async (req, res) => {
  try {
    // let provinces = await provinceService.getProvince();
    let cars = await carOwnerService.getAllCarOwner();
    let trips = await tripService.getAllTrip();
    let tickets = await ticketService.getAllTicket();
    res.render("admin/adminTicket", {
      layout: "adminLayout",
      // style: ["adminCarOwner.css"],
      js: ["seatAdmin.js"],
      cars: cars,
      trips: trips,
      tickets: tickets,
      // trip: trip,
      // provinces: provinces
    });
  } catch (e) {
    console.log(e);
  }
};

let updateSeat = async (req, res) => {
  try {
    let result = await seatService.updateSeat(req.params.id, req.body);
    if (result) {
      res.redirect("/admin/adminSeat");
    }
  } catch (e) {
    console.log(e);
  }
};
let testInsert = async (req, res) => {
  try {
    let id = 1;
    let r = await db.Ticket.create({
      dayStart: "2023-01-11T13:49",
      start: "2023-01-11T13:49",
      end: "2023-01-11T15:49",
      price: 0,
      idCarOwner: id,
      idTrip: 1,
    });
    //get car type
    let item = await db.CarOwner.findOne({
      where: { id: id },
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
  } catch (e) {
    console.log(e);
  }
};
let addTicket = async (req, res) => {
  try {
    let ticket = ticketService.addTicket(req.body);
    if (ticket) {
      res.redirect("/admin/adminTicket");
    }
  } catch (e) {
    console.log(e);
  }
};
module.exports = {
  getAdminPage,
  getCarOwnerAdmin,
  updateCarOwner,
  deleteCarOwner,
  addCarOwner,
  getTripAdmin,
  updateTrip,
  deleteTrip,
  addTrip,
  getSeatAdmin,
  updateSeat,
  testInsert,
  getTicketAdmin,
  addTicket,
};
