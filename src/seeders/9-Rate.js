"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    let items = [
      {
        content: "Chuyến xe nay tệ quá! Tôi ** muốn đi lần nữa",
        star: 1,
        idCarOwner: 1,
        idUser: 3,
      },
      {
        content: "Xe này phê quá, rất tốt",
        star: 4,
        idCarOwner: 1,
        idUser: 4,
      },
      {
        content: "Chuyến xe nay tệ quá! Tôi ** muốn đi lần nữa",
        star: 1,
        idCarOwner: 2,
        idUser: 3,
      },
      {
        content: "Xe này phê quá, rất tốt",
        star: 4,
        idCarOwner: 2,
        idUser: 4,
      },
      {
        content: "Chuyến xe nay tệ quá! Tôi ** muốn đi lần nữa",
        star: 1,
        idCarOwner: 3,
        idUser: 3,
      },
      {
        content: "Xe này phê quá, rất tốt",
        star: 4,
        idCarOwner: 3,
        idUser: 4,
      },
      {
        content: "Chuyến xe nay tệ quá! Tôi ** muốn đi lần nữa",
        star: 1,
        idCarOwner: 4,
        idUser: 3,
      },
      {
        content: "Xe này phê quá, rất tốt",
        star: 4,
        idCarOwner: 4,
        idUser: 4,
      },
      {
        content: "Chuyến xe nay tệ quá! Tôi ** muốn đi lần nữa",
        star: 1,
        idCarOwner: 5,
        idUser: 3,
      },
      {
        content: "Xe này phê quá, rất tốt",
        star: 4,
        idCarOwner: 5,
        idUser: 4,
      },
      {
        content: "Chuyến xe nay tệ quá! Tôi ** muốn đi lần nữa",
        star: 1,
        idCarOwner: 6,
        idUser: 3,
      },
      {
        content: "Xe này phê quá, rất tốt",
        star: 4,
        idCarOwner: 6,
        idUser: 4,
      },
      {
        content: "Chuyến xe nay tệ quá! Tôi ** muốn đi lần nữa",
        star: 1,
        idCarOwner: 7,
        idUser: 3,
      },
      {
        content: "Xe này phê quá, rất tốt",
        star: 4,
        idCarOwner: 7,
        idUser: 4,
      },
      {
        content: "Chuyến xe nay tệ quá! Tôi ** muốn đi lần nữa",
        star: 1,
        idCarOwner: 8,
        idUser: 3,
      },
      {
        content: "Xe này phê quá, rất tốt",
        star: 4,
        idCarOwner: 8,
        idUser: 4,
      },
      {
        content: "Chuyến xe nay tệ quá! Tôi ** muốn đi lần nữa",
        star: 1,
        idCarOwner: 9,
        idUser: 3,
      },
      {
        content: "Xe này phê quá, rất tốt",
        star: 4,
        idCarOwner: 9,
        idUser: 4,
      },
      {
        content: "Chuyến xe nay tệ quá! Tôi ** muốn đi lần nữa",
        star: 1,
        idCarOwner: 10,
        idUser: 3,
      },
      {
        content: "Xe này phê quá, rất tốt",
        star: 4,
        idCarOwner: 10,
        idUser: 4,
      },
    ];
    items.forEach((item) => {
      item.createdAt = Sequelize.literal("NOW() ");
      item.updatedAt = Sequelize.literal("NOW() ");
    });
    return queryInterface.bulkInsert("Rates", items);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Rates", null, {});
  },
};
