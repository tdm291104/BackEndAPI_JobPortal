"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Company.init(
    {
      name: DataTypes.STRING,
      wedSite: DataTypes.STRING,
      address: DataTypes.TEXT,
      description: DataTypes.TEXT,
      eyesight: DataTypes.TEXT,
      mission: DataTypes.TEXT,
      coreValue: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Company",
    }
  );
  return Company;
};
