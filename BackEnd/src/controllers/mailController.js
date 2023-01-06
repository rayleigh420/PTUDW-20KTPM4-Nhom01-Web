import mailService from "../services/mailService";
import seatService from "../services/seatService";

let sengridAPI = async (req, res) => {
  try {
    let result = await seatService.bookSeat(req.body)
    if (result) {
      res.redirect("/")
    }
    // let mailResult = await mailService.sendMail(req.body);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  sengridAPI,
};
