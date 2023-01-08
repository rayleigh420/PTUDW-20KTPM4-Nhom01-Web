"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    let items = [
      {
        from: "SG",
        to: "QNg", //1
      },
      {
        from: "SG",
        to: "BT", //2
      },
      {
        from: "SG",
        to: "GL", //3
      },
      {
        from: "SG",
        to: "NH", //4
      },
      {
        from: "SG",
        to: "BTh", //5
      },
      {
        from: "SG",
        to: "NT", //6
      },
      {
        from: "SG",
        to: "ĐL", //7
      },
      {
        from: "SG",
        to: "PY", //8 Phu Yen
      },
      {
        from: "SG",
        to: "BV", //9 Ba Ria Vung Tau
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
