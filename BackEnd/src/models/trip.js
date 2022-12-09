'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Trip.hasMany(models.Ticket, {
        foreignKey: 'idTicket'
      })
      // define association here
    }
  }
  Trip.init({
    from: DataTypes.TEXT,
    to: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Trip',
  });
  return Trip;
};