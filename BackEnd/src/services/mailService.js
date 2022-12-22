import sgMail from "@sendgrid/mail";
import provinceService from "./provinceService";
// const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

let sendMail = async (data) => {
  try {
    console.log(data);
    let from = await provinceService.getProvinceName(data.from);
    let to = await provinceService.getProvinceName(data.to);
    let msg = {
      to: data.email,
      from: "klong25112001@gmail.com", // Change to your verified sender
      subject: "[Vexere] Thông Tin Vé Điện Tử của Quý Khách",
      text: `
            Kinh gửi Quý Khách ${data.name},
            Yêu cầu đặt vé của quý khách đã được xác nhận thành công. Quý khách vui lòng xem thông tin điện tử.
            Từ: ${from}
            Đến: ${to}
            Vào ngày: ${data.date}
            Quý khách lựa chọn điểm đón: ${data.from} - điểm trả: ${data.to}
            `,
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
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  sendMail,
};
