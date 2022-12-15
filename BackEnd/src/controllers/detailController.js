import detailService from "../services/ticketService";

let getDetailPage = async (req, res) => {
  try {
    res.render("detail", {
      style: ["detail.css"],
      js: ["detail.js"],
      id: req.params.idTicket
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getDetailPage,
};
