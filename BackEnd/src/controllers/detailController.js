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

    console.log(idTicket)

    res.render("detail", {
      style: ["detail.css"],
      js: ["navigation.js", "detail.js"],
      ...carOwner,
      imgCar: imgCar,
      fromPlace: fromPlace,
      toPlace: toPlace,
      id: req.params.idTicket,
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getDetailPage,
};
