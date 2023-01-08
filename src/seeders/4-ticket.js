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
      {
        dayStart: "2023-1-6",
        start: "2023-1-6 05:30:00",
        end: "2023-1-6 17:30:00",
        price: 550000,
        idCarOwner: 2,
        idTrip: 2,
        // idTicket: 6,
      },
      {
        dayStart: "2023-1-7",
        start: "2023-1-7 00:30:00",
        end: "2023-1-7 11:30:00",
        price: 550000,
        idCarOwner: 2,
        idTrip: 6,
        // idTicket: 7,
      },
      {
        dayStart: "2023-1-8",
        start: "2023-1-8 08:30:00",
        end: "2023-1-8 15:30:00",
        price: 550000,
        idCarOwner: 2,
        idTrip: 4,
        // idTicket: 8,
      },
      {
        dayStart: "2023-1-10",
        start: "2023-1-10 05:30:00",
        end: "2023-1-10 17:30:00",
        price: 550000,
        idCarOwner: 3,
        idTrip: 5,
        // idTicket: 9,
      },
      {
        dayStart: "2023-1-10",
        start: "2023-1-10 05:30:00",
        end: "2023-1-10 17:30:00",
        price: 550000,
        idCarOwner: 8,
        idTrip: 5,
        // idTicket: 10,
      },
      {
        dayStart: "2023-1-11",
        start: "2023-1-11 05:30:00",
        end: "2023-1-11 17:30:00",
        price: 550000,
        idCarOwner: 7,
        idTrip: 4,
        // idTicket: 11,
      },
      {
        dayStart: "2023-1-12",
        start: "2023-1-12 05:30:00",
        end: "2023-1-12 17:30:00",
        price: 550000,
        idCarOwner: 7,
        idTrip: 8,
        // idTicket: 12,
      },
      {
        dayStart: "2023-1-12",
        start: "2023-1-12 05:30:00",
        end: "2023-1-12 17:30:00",
        price: 550000,
        idCarOwner: 7,
        idTrip: 9,
        // idTicket: 13,
      },
      {
        dayStart: "2023-1-12",
        start: "2023-1-12 05:30:00",
        end: "2023-1-12 17:30:00",
        price: 550000,
        idCarOwner: 8,
        idTrip: 8,
        // idTicket: 14,
      },
      {
        dayStart: "2023-1-15",
        start: "2023-1-15 05:30:00",
        end: "2023-1-15 17:30:00",
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
