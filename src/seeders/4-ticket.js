"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    let items = [
      {
        dayStart: "2023-1-16",
        start: "2023-1-16 05:30:00",
        end: "2023-1-16 17:30:00",
        price: 450000,
        idCarOwner: 1,
        idTrip: 1,
      },
      {
        dayStart: "2023-1-16",
        start: "2023-1-16 05:30:00",
        end: "2023-1-16 17:30:00",
        price: 250000,
        idCarOwner: 1,
        idTrip: 2,
      },
      {
        dayStart: "2023-1-16",
        start: "2023-1-16 05:30:00",
        end: "2023-1-16 17:30:00",
        price: 550000,
        idCarOwner: 1,
        idTrip: 3,
      },
      {
        dayStart: "2023-1-16",
        start: "2023-1-16 05:30:00",
        end: "2023-1-16 17:30:00",
        price: 550000,
        idCarOwner: 1,
        idTrip: 4,
      },
      {
        dayStart: "2023-1-16",
        start: "2023-1-16 05:30:00",
        end: "2023-1-16 17:30:00",
        price: 550000,
        idCarOwner: 2,
        idTrip: 5,
      },
      {
        dayStart: "2023-1-16",
        start: "2023-1-16 05:30:00",
        end: "2023-1-16 17:30:00",
        price: 550000,
        idCarOwner: 2,
        idTrip: 2,
        // idTicket: 6,
      },
      {
        dayStart: "2023-1-17",
        start: "2023-1-17 00:30:00",
        end: "2023-1-17 11:30:00",
        price: 550000,
        idCarOwner: 2,
        idTrip: 6,
        // idTicket: 7,
      },
      {
        dayStart: "2023-1-18",
        start: "2023-1-18 08:30:00",
        end: "2023-1-18 15:30:00",
        price: 550000,
        idCarOwner: 2,
        idTrip: 4,
        // idTicket: 8,
      },
      {
        dayStart: "2023-1-13",
        start: "2023-1-13 05:30:00",
        end: "2023-1-13 17:30:00",
        price: 650000,
        idCarOwner: 3,
        idTrip: 5,
        // idTicket: 9,
      },
      {
        dayStart: "2023-1-13",
        start: "2023-1-13 05:30:00",
        end: "2023-1-13 17:30:00",
        price: 550000,
        idCarOwner: 8,
        idTrip: 5,
        // idTicket: 10,
      },
      {
        dayStart: "2023-1-13",
        start: "2023-1-13 05:30:00",
        end: "2023-1-13 17:30:00",
        price: 650000,
        idCarOwner: 7,
        idTrip: 4,
        // idTicket: 11,
      },
      {
        dayStart: "2023-1-13",
        start: "2023-1-13 05:30:00",
        end: "2023-1-13 17:30:00",
        price: 650000,
        idCarOwner: 7,
        idTrip: 8,
        // idTicket: 12,
      },
      {
        dayStart: "2023-1-13",
        start: "2023-1-13 05:30:00",
        end: "2023-1-13 17:30:00",
        price: 650000,
        idCarOwner: 7,
        idTrip: 9,
        // idTicket: 13,
      },
      {
        dayStart: "2023-1-13",
        start: "2023-1-13 05:30:00",
        end: "2023-1-13 17:30:00",
        price: 950000,
        idCarOwner: 8,
        idTrip: 8,
        // idTicket: 14,
      },
      {
        dayStart: "2023-1-13",
        start: "2023-1-13 05:30:00",
        end: "2023-1-13 17:30:00",
        price: 550000,
        idCarOwner: 8,
        idTrip: 6,
        // idTicket: 15,
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
