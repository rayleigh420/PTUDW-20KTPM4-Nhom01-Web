"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    let items = [
      {
        from: "TPHCM",
        to: "QN",
        idCarOwner: "1",
        start: "5/2/2022",
        end: "5/12/2022",
      },
      {
        from: "TPHCM",
        to: "BT",
        idCarOwner: "2",
        idCarOwner: "1",
        start: "5/2/2022",
        end: "5/12/2022",
      },
      {
        from: "TPHCM",
        to: "BT",
        idCarOwner: "3",
        idCarOwner: "1",
        start: "5/2/2022",
        end: "5/12/2022",
      },
      {
        from: "TPHCM",
        to: "BT",
        idCarOwner: "3",
        idCarOwner: "1",
        start: "5/2/2022",
        end: "5/12/2022",
      },
    ];
    items.forEach((item) => {
      item.createdAt = Sequelize.literal("NOW() ");
      item.updatedAt = Sequelize.literal("NOW() ");
    });

    return queryInterface.bulkInsert("Trips", items);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
