"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SpendingCategories extends Model {
    static associate(models) {
      SpendingCategories.hasMany(models.Spending, {
        foreignKey: "SpendingCategoryId",
      });
    }
  }
  SpendingCategories.init(
    {
      type: DataTypes.STRING,
      notes: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "SpendingCategories",
    }
  );
  return SpendingCategories;
};
