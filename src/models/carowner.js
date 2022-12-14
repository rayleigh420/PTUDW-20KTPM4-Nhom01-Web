"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CarOwner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CarOwner.hasMany(models.Ticket, {
        foreignKey: "idCarOwner",
      });
      CarOwner.hasMany(models.Rate, {
        foreignKey: "idCarOwner",
      });
      //define association here
    }
  }
  CarOwner.init(
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      phone: DataTypes.STRING,
      imgLogo: DataTypes.STRING,
      description: DataTypes.TEXT,
      type: DataTypes.INTEGER,
      imgCar: DataTypes.ARRAY(DataTypes.STRING),
    },
    {
      sequelize,
      modelName: "CarOwner",
    }
  );
  return CarOwner;
};
