import db from "../models/index";
import detailService from "../services/detailService";
import rateService from "../services/rateService";
import placeService from "../services/placeService";
import userService from "../services/userService";

let getDetailPage = async (req, res) => {
  try {
    let [idTicket, amount] = req.params.idTicket.split("_");
    let rateInfo = await rateService.getRates(idTicket);
    let items = await detailService.getDetailPage(idTicket, amount);
    let carOwner = items["carOwner"];
    let fromPlace = items["FromDB"];
    let toPlace = items["ToDB"];
    let imgCar = carOwner.imgCar;
    // console.log(carOwner);
    // console.log(fromPlace.length);
    // console.log(toPlace.length);
    // console.log(idTicket)
    // console.log(items);
    // console.log(items.phone);
    // console.log(items.address);
    res.render("detail", {
      style: ["detail.css"],
      js: ["navigation.js", "detail.js"],
      amount: amount,
      ...carOwner,
      imgCar: imgCar,
      fromPlace: fromPlace,
      toPlace: toPlace,
      id: idTicket,
      type: carOwner.type,
      price: items.price,
      phone: items.phone,
      address: items.address,
      rates: rateInfo.rates,
      carOwnerStar: rateInfo.stars,
      // rates: items.rates,
      // carOwnerStar: items.stars,
    });
  } catch (e) {
    console.log(e);
  }
};
let handleRate = async (req, res) => {
  try {
    let idTicket = req.params.idTicket;
    let items = await detailService.getDetailPage(idTicket);
    // console.log(req.query.ratestar);
    // console.log(req.query.content);
    let carOwner = items["carOwner"];
    // console.log(carOwner["id"]);
    // console.log(req.body);
    let email = req.body.email;
    let user = await userService.getUserByEmail(email);
    // console.log(user.user.id);
    // console.log(user["id"]);
    await db.Rate.create({
      content: req.body.content,
      star: req.body.ratestar,
      idCarOwner: carOwner["id"],
      idUser: user.user.id,
    });
    res.redirect("/detail/" + idTicket);
  } catch (e) {
    console.log(e);
  }
};
module.exports = {
  getDetailPage,
  handleRate,
};
