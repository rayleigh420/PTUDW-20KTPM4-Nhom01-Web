'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      History.belongsTo(models.User, {
        foreignKey: 'idUser'
      })
      History.belongsTo(models.Ticket, {
        foreignKey: 'idTicket'
      })
      History.belongsTo(models.Seat, {
        foreignKey: 'idSeat'
      })
      // define association here
    }
  }
  History.init({

  }, {
    sequelize,
    modelName: 'History',
  });
  return History;
};