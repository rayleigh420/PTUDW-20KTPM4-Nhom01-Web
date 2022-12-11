"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    let items = [
      {
        from: "TPHCM",
        to: "QN", //1
      },
      {
        from: "TPHCM",
        to: "BT", //2
      },
      {
        from: "TPHCM",
        to: "GL", //3
      },
      {
        from: "TPHCM",
        to: "NH", //4
      },
    ];
    items.forEach((item) => {
      item.createdAt = Sequelize.literal("NOW() ");
      item.updatedAt = Sequelize.literal("NOW() ");
    });

    return queryInterface.bulkInsert("Trips", items);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Trips", null, {});
  },
};
