'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Seat.belongsTo(models.Ticket, {
        foreignKey: 'idTicket'
      })
      Seat.belongsTo(models.User, {
        foreignKey: 'idUser'
      })
      Seat.hasOne(models.History, {
        foreignKey: 'idSeat'
      })
      // define association here
    }
  }
  Seat.init({
    isBook: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
};