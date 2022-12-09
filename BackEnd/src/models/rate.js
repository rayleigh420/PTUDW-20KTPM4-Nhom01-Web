'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Rate.belongsTo(models.User, {
        foreignKey: 'idUser'
      })
      Rate.belongsTo(models.CarOwner, {
        foreignKey: 'idCarOwner'
      })
      // define association here
    }
  }
  Rate.init({
    content: DataTypes.TEXT,
    star: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Rate',
  });
  return Rate;
};