import detailService from "../services/listService";

let getDetailPage = async (req, res) => {
  try {
    res.render("detail", {
      style: ["detail.css"],
      js: ["detail.js"],
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getDetailPage,
};
