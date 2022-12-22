"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    let items = [
      { idBooking: null, idTicket: 1, idUser: null },
      { idBooking: null, idTicket: 1, idUser: null },
      { idBooking: null, idTicket: 1, idUser: null },
      { idBooking: null, idTicket: 1, idUser: null },
      { idBooking: null, idTicket: 1, idUser: null },
      { idBooking: null, idTicket: 1, idUser: null },
      { idBooking: null, idTicket: 1, idUser: null },
      { idBooking: null, idTicket: 1, idUser: null },
      { idBooking: null, idTicket: 1, idUser: null },
      { idBooking: null, idTicket: 1, idUser: null },
      { idBooking: null, idTicket: 1, idUser: null },
      { idBooking: null, idTicket: 1, idUser: null },
      { idBooking: null, idTicket: 1, idUser: null },
      { idBooking: null, idTicket: 1, idUser: null },
      { idBooking: null, idTicket: 1, idUser: null },
      { idBooking: null, idTicket: 1, idUser: null },
      { idBooking: null, idTicket: 1, idUser: null },
      { idBooking: null, idTicket: 1, idUser: null },
      { idBooking: null, idTicket: 1, idUser: null },
      { idBooking: null, idTicket: 1, idUser: null },
      { idBooking: null, idTicket: 5, idUser: null },
      { idBooking: null, idTicket: 5, idUser: null },
      { idBooking: null, idTicket: 5, idUser: null },
      { idBooking: null, idTicket: 5, idUser: null },
      { idBooking: null, idTicket: 5, idUser: null },
      { idBooking: null, idTicket: 5, idUser: null },
      { idBooking: null, idTicket: 5, idUser: null },
      { idBooking: null, idTicket: 5, idUser: null },
      { idBooking: null, idTicket: 5, idUser: null },
      { idBooking: null, idTicket: 5, idUser: null },
      { idBooking: null, idTicket: 5, idUser: null },
      { idBooking: null, idTicket: 5, idUser: null },
      { idBooking: null, idTicket: 5, idUser: null },
      { idBooking: null, idTicket: 5, idUser: null },
      { idBooking: null, idTicket: 5, idUser: null },
      { idBooking: null, idTicket: 5, idUser: null },
      { idBooking: null, idTicket: 5, idUser: null },
      { idBooking: null, idTicket: 5, idUser: null },
      { idBooking: null, idTicket: 5, idUser: null },
      { idBooking: null, idTicket: 5, idUser: null },
    ];
    items.forEach((item) => {
      item.createdAt = Sequelize.literal("NOW() ");
      item.updatedAt = Sequelize.literal("NOW() ");
    });
    return queryInterface.bulkInsert("Seats", items);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Seats", null, {});
  },
};
