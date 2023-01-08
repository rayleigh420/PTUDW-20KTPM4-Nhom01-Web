"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    let items = [
      {
        idUser: 1,
        idTicket: 1,
        idSeat: 1,
      },
      {
        idUser: 1,
        idTicket: 2,
        idSeat: 2,
      },
      {
        idUser: 1,
        idTicket: 2,
        idSeat: 2,
      },
    ];
    items.forEach((item) => {
      item.createdAt = Sequelize.literal("NOW() ");
      item.updatedAt = Sequelize.literal("NOW() ");
    });
    return queryInterface.bulkInsert("Histories", items);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Histories", null, {});
  },
};
