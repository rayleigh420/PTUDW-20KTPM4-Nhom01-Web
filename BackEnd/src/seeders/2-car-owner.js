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
        imgCar: [
          "https://ibb.co/M55FWNq",
          "https://ibb.co/nPV4XWW",
          "https://ibb.co/HrTBm7K",
        ],
      },
      {
        name: "An Tiến Phát",
        address: "",
        phone: "",
        imgLogo: "https://ibb.co/WV7SPT2",
        imgCar: [
          "https://ibb.co/M55FWNq",
          "https://ibb.co/nPV4XWW",
          "https://ibb.co/HrTBm7K",
        ],
      },
      {
        name: "An Phú Busline",
        address: "",
        phone: "",
        imgLogo: "https://ibb.co/2W4kr5x",
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
