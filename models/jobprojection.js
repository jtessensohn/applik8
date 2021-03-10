'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JobProjection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      JobProjection.belongsTo(models.User)
      JobProjection.belongsTo(models.SalaryRate)
    }
  };
  JobProjection.init({
    experienceYears: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    SalaryRateId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'JobProjection',
  });
  return JobProjection;
};