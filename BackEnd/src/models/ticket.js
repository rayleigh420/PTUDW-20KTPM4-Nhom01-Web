'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Ticket.belongsTo(models.CarOwner, {
        foreignKey: 'idCarOwner'
      })
      Ticket.belongsTo(models.Trip, {
        foreignKey: 'idTrip'
      })
      Ticket.hasMany(models.Seat, {
        foreignKey: 'idTicket'
      })
      Ticket.hasMany(models.Ticket, {
        foreignKey: 'idTicket'
      })
    }
  }
  Ticket.init({
    dayStart: DataTypes.DATEONLY,
    start: DataTypes.DATE,
    end: DataTypes.DATE,
    price: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Ticket',
  });
  return Ticket;
};