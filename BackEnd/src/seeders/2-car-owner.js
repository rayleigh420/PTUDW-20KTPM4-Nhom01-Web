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
        imgLogo: "https://ibb.co/F4msnjv",
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
        imgLogo: "https://ibb.co/WV7SPT2",
        type: 32,
        imgCar: [
          "https://i.ibb.co/kxDpnZq/1661771439561.jpg",
          "https://i.ibb.co/Sx5mTQC/1661771440079.jpg",
          "https://i.ibb.co/wRw9Tz4/1661771440795.jpg",
        ],
      },
      {
        name: "An Phú Busline",
        address:
          "Chi nhánh Quy Nhơn: Bến xe Quy Nhơn - 71 Tây Sơn, Quy Nhơn, Bình Định/Chi nhánh TP.HCM: Bến xe Miền Đông - Dãy số 9",
        phone: "1900 888684 ",
        imgLogo: "https://ibb.co/2W4kr5x",
        type: 22,
        imgCar: [
          "https://ibb.co/M55FWNq",
          "https://ibb.co/nPV4XWW",
          "https://ibb.co/HrTBm7K",
        ],
      },
      {
        name: "Cao Lâm",
        address:
          "Chi nhánh Phan Thiết: 165-167 Đỗ Hành, P. Phú Thủy/Chi nhánh TP.HCM: 270 Trần Phú, P.8",
        phone: "1900 888684",
        imgLogo: "https://ibb.co/tzzs5rg",
        type: 32,
        imgCar: [
          "https://ibb.co/M55FWNq",
          "https://ibb.co/nPV4XWW",
          "https://ibb.co/HrTBm7K",
        ],
      }, //
      {
        name: "Dũng Lệ",
        address: "Chi nhánh TP.HCM: 1023 Hương Lộ 2",
        phone: "1900 888684",
        imgLogo: "https://ibb.co/tzzs5rg",
        type: 32,
        imgCar: [
          "https://ibb.co/M55FWNq",
          "https://ibb.co/nPV4XWW",
          "https://ibb.co/HrTBm7K",
        ],
      },
      {
        name: "Hoàng Nhân",
        address:
          "Chi nhánh Phan Rang: Lô 10D Trung Tâm Thương Mại Thanh Hà/Chi nhánh TP.HCM: 509 Nhật Tảo, Phường 7",
        phone: "1900 888684",
        imgLogo: "https://ibb.co/tzzs5rg",
        type: 32,
        imgCar: [
          "https://ibb.co/M55FWNq",
          "https://ibb.co/nPV4XWW",
          "https://ibb.co/HrTBm7K",
        ],
      },
      {
        name: "Thiên Kim Limousine",
        address: "Chi nhánh TP.HCM: 1249 đường 3 tháng 2",
        phone: "1900 888684",
        imgLogo: "https://ibb.co/tzzs5rg",
        type: 9,
        imgCar: [
          "https://i.ibb.co/kxDpnZq/1661771439561.jpg",
          "https://i.ibb.co/Sx5mTQC/1661771440079.jpg",
          "https://i.ibb.co/wRw9Tz4/1661771440795.jpg",
        ],
      },
      {
        name: "Thúy Hà Linh",
        address:
          "Chi nhánh Hàm Tân: 26 QL 55, Xã Tân Hà, Huyện Hàm Tân, tỉnh Bình Thuận/Chi nhánh TP.HCM:  2 Hồ Đắc Di - Tân Phú - Hồ Chí Minh",
        phone: "1900 7070",
        imgLogo: "https://ibb.co/tzzs5rg",
        type: 22,
        imgCar: [
          "https://ibb.co/M55FWNq",
          "https://ibb.co/nPV4XWW",
          "https://ibb.co/HrTBm7K",
        ],
      },
      {
        name: "Trung Nga",
        address:
          "Chi nhánh Bình Thuận: T1 Võ Văn Kiệt, P. Phú Thuỷ/Chi nhánh TP.HCM:  85A Nguyễn Cư Trinh",
        phone: "1900 888684",
        imgLogo: "https://ibb.co/tzzs5rg",
        type: 32,
        imgCar: [
          "https://ibb.co/M55FWNq",
          "https://ibb.co/nPV4XWW",
          "https://ibb.co/HrTBm7K",
        ],
      },
      {
        name: "Việt Nhật",
        address:
          "Chi nhánh Khánh Hòa: 18C Trần Hưng Đạo/Chi nhánh TP.HCM:  263 Phạm Ngũ Lão",
        phone: "1900 888684",
        imgLogo: "https://ibb.co/tzzs5rg",
        type: 32,
        imgCar: [
          "https://ibb.co/M55FWNq",
          "https://ibb.co/nPV4XWW",
          "https://ibb.co/HrTBm7K",
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
