import mailService from "../services/mailService"

let sengridAPI = async (req, res) => {
  try {
    let result = await mailService.sendMail(req.body)
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  sengridAPI,
};
