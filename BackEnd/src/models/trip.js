"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Trip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Trip.hasMany(models.Ticket, {
        foreignKey: "idTicket",
      });
      Trip.belongsTo(models.CarOwner, {
        foreignKey: "idCarOwner",
      });
      // define association here
    }
  }
  Trip.init(
    {
      from: DataTypes.TEXT,
      to: DataTypes.TEXT,
      start: DataTypes.DATE,
      end: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Trip",
    }
  );
  return Trip;
};
