const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

let sengridAPI = async (req, res) => {
  //   try {
  //     console.log(req.body);
  //   } catch (e) {
  //     console.log(e);
  //   }
  let msg = {
    to: "klong100000@gmail.com", // Change to your recipient
    from: "klong31122001@gmail.com", // Change to your verified sender
    subject: "Đặt xe thành công",
    text: "Đặt xe từ A đến B abcxyz",
    //   html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };
  await sgMail
    .send(msg)
    .then((response) => {
      console.log(response[0].statusCode);
      console.log(response[0].headers);
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = {
  sengridAPI,
};
