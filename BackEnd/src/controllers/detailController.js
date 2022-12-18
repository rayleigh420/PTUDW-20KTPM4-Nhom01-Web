import detailService from "../services/detailService";
import placeService from "../services/placeService";
let getDetailPage = async (req, res) => {
  try {
    let idTicket = req.params.idTicket;
    let items = await detailService.getDetailPage(idTicket);
    let carOwner = items["carOwner"];
    let fromPlace = items["FromDB"];
    let toPlace = items["ToDB"];
    let imgCar = carOwner.imgCar;
    console.log(carOwner);
    console.log(fromPlace.length);
    console.log(toPlace.length);

    res.render("detail", {
      style: ["detail.css"],
      js: ["navigation.js", "detail.js"],
      id: req.params.idTicket,
      ...carOwner,
      imgCar: imgCar,
      fromPlace: fromPlace,
      toPlace: toPlace,
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getDetailPage,
};
