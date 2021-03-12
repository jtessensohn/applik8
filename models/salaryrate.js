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
    median: DataTypes.INTEGER,
    years: {
      type: DataTypes.VIRTUAL,
      get: function() {
        const median = this.median;
        console.log(median)
        return [
          Math.round(median*0.77), 
          Math.round(median*0.78),
          Math.round(median*0.80),
          Math.round(median*0.86),
          Math.round(median*0.89), 
          Math.round(median*0.92),
          Math.round(median*0.96), 
          Math.round(median*1), 
          Math.round(median*1.04),
          Math.round(median*1.06),
          Math.round(median*1.07),
          Math.round(median*1.08),
          Math.round(median*1.09),
          Math.round(median*1.10),
          Math.round(median*1.11),
          Math.round(median*1.14)
        ]
      } 
    }
  }, {
    sequelize,
    modelName: 'SalaryRate',
  });
  return SalaryRate;
};