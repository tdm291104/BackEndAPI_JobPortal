"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class JobInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  JobInfo.init(
    {
      title: DataTypes.TEXT,
      companyId: DataTypes.INTEGER,
      careerId: DataTypes.INTEGER,
      address: DataTypes.TEXT,
      numberEmployee: DataTypes.INTEGER,
      experience: DataTypes.STRING,
      level: DataTypes.STRING,
      salary: DataTypes.INTEGER,
      education: DataTypes.STRING,
      description: DataTypes.TEXT,
      requirements: DataTypes.TEXT,
      deadline: DataTypes.DATE,
      sourcePicture: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "JobInfo",
    }
  );
  return JobInfo;
};
