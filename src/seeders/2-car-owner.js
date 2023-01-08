"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    let items = [
      {
        name: "An Anh Limousine",
        address:
          "Chi nhánh Ninh Thuận: 222 Lê Duẫn, Phủ Hà, Phan Rang/Chi nhánh TP.HCM: 85 Bờ Bao Tân Thắng, P. Sơn Kỳ, Q. Tân Phú/Chi nhánh Đà Lạt: 4C Yersin, Phường 10 (Kế bên Công viên Yersin), TP. Đà Lạt",
        phone: "1900 8678",
        imgLogo: "https://i.ibb.co/DfzGLSX/cropped-Logo-2.png",
        type: 9,
        imgCar: [
          "https://i.ibb.co/cXX4MTz/1.jpg",
          "https://i.ibb.co/Dr6mBqq/2.jpg",
          "https://i.ibb.co/ZhzGydf/3.jpg",
        ],
      },
      {
        name: "An Tiến Phát",
        address:
          "Chi nhánh Bình Dương: Bến xe Bình Dương - 233 Đường 30 Tháng 4, Thủ Dầu Mộ, Bình Dương/Chi nhánh TP.HCM: Bến xe Miền Đông - 292 Đinh Bộ Lĩnh, TPHCM/Chi nhánh Quảng Ngãi: Bến xe Quảng Ngãi  - 02 Trần Khánh Dư, Quảng Ngãi",
        phone: "1900 888684 - 1900 888843",
        imgLogo: "https://i.ibb.co/nP4hnWL/ANTIENPHAT.webp",
        type: 32,
        imgCar: [
          "https://static.vexere.com/production/images/1620363250861.jpeg",
          "https://static.vexere.com/production/images/1620363251243.jpeg",
          "https://static.vexere.com/production/images/1620363271706.jpeg",
        ],
      },
      {
        name: "An Phú Busline",
        address:
          "Chi nhánh Quy Nhơn: Bến xe Quy Nhơn - 71 Tây Sơn, Quy Nhơn, Bình Định/Chi nhánh TP.HCM: Bến xe Miền Đông - Dãy số 9",
        phone: "1900 888684 ",
        imgLogo: "https://i.ibb.co/mbWcKSk/1605848869347.jpg",
        type: 22,
        imgCar: [
          "https://static.vexere.com/production/images/1605848824197.jpeg",
          "https://static.vexere.com/production/images/1605848872856.jpeg",
          "https://static.vexere.com/production/images/1639452217048.jpeg",
        ],
      },
      {
        name: "Cao Lâm",
        address:
          "Chi nhánh Phan Thiết: 165-167 Đỗ Hành, P. Phú Thủy/Chi nhánh TP.HCM: 270 Trần Phú, P.8",
        phone: "1900 888684",
        imgLogo:
          "https://i.ibb.co/jzzMFXm/images-q-tbn-ANd9-Gc-TX7g-Svw-4f-Q-M0s53-d-Lmafuoa-CJcs-UJw-I3-Qagmac-RAay-3-3vqr-LMo5te-PVtb2nqs-R0.jpg",
        type: 32,
        imgCar: [
          "https://static.vexere.com/c/i/10824/xe-cao-lam-VeXeRe-GSSIYfT-1000x600.jpeg",
          "https://static.vexere.com/c/i/10824/xe-cao-lam-VeXeRe-IjR2ml2-1000x600.jpeg",
          "https://static.vexere.com/c/i/10824/xe-cao-lam-VeXeRe-EUK3m7f-1000x600.jpeg",
        ],
      }, //
      {
        name: "Dũng Lệ",
        address: "Chi nhánh TP.HCM: 1023 Hương Lộ 2",
        phone: "1900 888684",
        imgLogo:
          "https://static.vexere.com/production/images/1595585677492.jpeg?w=250&h=250",
        type: 32,
        imgCar: [
          "https://static.vexere.com/production/images/1595585678678.jpeg",
          "https://static.vexere.com/production/images/1595585675282.jpeg",
          "https://static.vexere.com/production/images/1595585676259.jpeg",
        ],
      },
      {
        name: "Hoàng Nhân",
        address:
          "Chi nhánh Phan Rang: Lô 10D Trung Tâm Thương Mại Thanh Hà/Chi nhánh TP.HCM: 509 Nhật Tảo, Phường 7",
        phone: "1900 888684",
        imgLogo:
          "https://static.vexere.com/production/images/1587289772561.jpeg?w=250&h=250",
        type: 32,
        imgCar: [
          "https://static.vexere.com/production/images/1587289704079.jpeg",
          "https://static.vexere.com/production/images/1587289763293.jpeg",
          "https://static.vexere.com/production/images/1587289766049.jpeg",
        ],
      },
      {
        name: "Thiên Kim Limousine",
        address: "Chi nhánh TP.HCM: 1249 đường 3 tháng 2",
        phone: "1900 888684",
        imgLogo:
          "https://static.vexere.com/production/images/1661771441869.jpeg?w=250&h=250",
        type: 9,
        imgCar: [
          "https://static.vexere.com/production/images/1661771439561.jpeg",
          "https://static.vexere.com/production/images/1661771440079.jpeg",
          "https://static.vexere.com/production/images/1661771440795.jpeg",
        ],
      },
      {
        name: "Thúy Hà Linh",
        address:
          "Chi nhánh Hàm Tân: 26 QL 55, Xã Tân Hà, Huyện Hàm Tân, tỉnh Bình Thuận/Chi nhánh TP.HCM:  2 Hồ Đắc Di - Tân Phú - Hồ Chí Minh",
        phone: "1900 7070",
        imgLogo:
          "https://static.vexere.com/c/i/29120/xe-thuy-ha-linh-VeXeRe-eGlsaFI-1000x600.jpeg?w=250&h=250",
        type: 22,
        imgCar: [
          "https://static.vexere.com/production/images/1605848824197.jpeg",
          "https://static.vexere.com/production/images/1605848872856.jpeg",
          "https://static.vexere.com/production/images/1639452217048.jpeg",
        ],
      },
      {
        name: "Trung Nga",
        address:
          "Chi nhánh Bình Thuận: T1 Võ Văn Kiệt, P. Phú Thuỷ/Chi nhánh TP.HCM:  85A Nguyễn Cư Trinh",
        phone: "1900 888684",
        imgLogo:
          "https://static.vexere.com/c/i/11792/xe-trung-nga-VeXeRe-0leTCs6-1000x600.jpeg?w=250&h=250",
        type: 32,
        imgCar: [
          "https://static.vexere.com/production/images/1595585678678.jpeg",
          "https://static.vexere.com/production/images/1595585675282.jpeg",
          "https://static.vexere.com/production/images/1595585676259.jpeg",
        ],
      },
      {
        name: "Việt Nhật",
        address:
          "Chi nhánh Khánh Hòa: 18C Trần Hưng Đạo/Chi nhánh TP.HCM:  263 Phạm Ngũ Lão",
        phone: "1900 888684",
        imgLogo:
          "https://static.vexere.com/production/images/1594792171273.jpeg?w=250&h=250",
        type: 32,
        imgCar: [
          "https://static.vexere.com/production/images/1594792171731.jpeg",
          "https://static.vexere.com/production/images/1575348054986.jpeg",
          "https://static.vexere.com/production/images/1640833518394.jpeg",
        ],
      },
    ];
    items.forEach((item) => {
      item.createdAt = Sequelize.literal("NOW() ");
      item.updatedAt = Sequelize.literal("NOW() ");
    });
    return queryInterface.bulkInsert("CarOwners", items);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("CarOwners", null, {});
  },
};
