"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    let items = [
      {
        name: "admin",
        email: "admin3112@gmail.com",
        password:
          "$2a$10$aX9zLI2gSKjVwr3JKX4ObOhf/FdF6mMCRSTSX5DPfhEnvQG7t2ELG", //klong31122001
      },
    ];
    items.forEach((item) => {
      item.createdAt = Sequelize.literal("NOW() ");
      item.updatedAt = Sequelize.literal("NOW() ");
    });
    return queryInterface.bulkInsert("Users", items);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
