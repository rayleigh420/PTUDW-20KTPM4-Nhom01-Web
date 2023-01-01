import sgMail from "@sendgrid/mail";
import provinceService from "./provinceService";
require('dotenv').config()
// const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

let sendMail = async (data) => {
  try {
    console.log("Data Mail: ", data);
    let from = await provinceService.getProvinceName(data.from);
    let to = await provinceService.getProvinceName(data.to);
    let msg = {
      to: data.email,
      from: process.env.FROM_MAIL, // Change to your verified sender
      subject: "[Vexere] Thông Tin Vé Điện Tử của Quý Khách",
      // text: `
      //       Kinh gửi Quý Khách ${data.name},
      //       Yêu cầu đặt vé của quý khách đã được xác nhận thành công. Quý khách vui lòng xem thông tin điện tử.
      //       Từ: ${from}
      //       Đến: ${to}
      //       Vào ngày: ${data.date}
      //       Quý khách lựa chọn điểm đón: ${data.from} - điểm trả: ${data.to}
      //       `,
      html: `
            <h2>Kinh gửi Quý Khách ${data.name}, </h2>
            <p>Yêu cầu đặt vé của quý khách đã được xác nhận thành công. Quý khách vui lòng xem thông tin điện tử. </p>
            <p><b>Từ:</b> ${from}</p>
            <p><b>Đến:</b> ${to}</p>
            <p><b>Vào ngày:</b> ${data.date} </p>
            <p><b>Quý khách lựa chọn điểm đón:</b> ${data.from} - <b>điểm trả:</b> ${data.to}</p>
            `,
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
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  sendMail,
};
