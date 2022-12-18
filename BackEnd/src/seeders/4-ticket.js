"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    let items = [
      {
        dayStart: "2023-1-6",
        start: "2023-1-6 05:30:00",
        end: "2023-1-6 17:30:00",
        price: 450000,
        idCarOwner: 1,
        idTrip: 1,
      },
      {
        dayStart: "2023-1-6",
        start: "2023-1-6 05:30:00",
        end: "2023-1-6 17:30:00",
        price: 250000,
        idCarOwner: 1,
        idTrip: 2,
      },
      {
        dayStart: "2023-1-6",
        start: "2023-1-6 05:30:00",
        end: "2023-1-6 17:30:00",
        price: 550000,
        idCarOwner: 1,
        idTrip: 3,
      },
      {
        dayStart: "2023-1-6",
        start: "2023-1-6 05:30:00",
        end: "2023-1-6 17:30:00",
        price: 550000,
        idCarOwner: 1,
        idTrip: 4,
      },
      {
        dayStart: "2023-1-6",
        start: "2023-1-6 05:30:00",
        end: "2023-1-6 17:30:00",
        price: 550000,
        idCarOwner: 2,
        idTrip: 5,
      },
    ];
    items.forEach((item) => {
      item.createdAt = Sequelize.literal("NOW() ");
      item.updatedAt = Sequelize.literal("NOW() ");
    });
    return queryInterface.bulkInsert("Tickets", items);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Tickets", null, {});
  },
};
