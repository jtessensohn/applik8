'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SalaryRate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SalaryRate.hasMany(models.JobProjection)
    }
  };
  SalaryRate.init({
    title: DataTypes.STRING,
    median: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SalaryRate',
  });
  return SalaryRate;
};