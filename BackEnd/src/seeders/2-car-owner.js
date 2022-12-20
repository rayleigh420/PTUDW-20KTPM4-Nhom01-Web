"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    let items = [
      {
        name: "An Anh Limousine",
        address: "",
        phone: "",
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
        address: "",
        phone: "",
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
        address: "",
        phone: "",
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
        address: "",
        phone: "",
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
        address: "",
        phone: "",
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
        address: "",
        phone: "",
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
        address: "",
        phone: "",
        imgLogo: "https://ibb.co/tzzs5rg",
        type: 9,
        imgCar: [
          "https://ibb.co/M55FWNq",
          "https://ibb.co/nPV4XWW",
          "https://ibb.co/HrTBm7K",
        ],
      },
      {
        name: "Thúy Hà Linh",
        address: "",
        phone: "",
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
        address: "",
        phone: "",
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
        address: "",
        phone: "",
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
