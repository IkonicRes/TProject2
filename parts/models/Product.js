const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isFloat: true, // Validate that the value is a float
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0, // Set default value to 0
      validate: {
        isInt: true, // Validate that the value is an integer
      },
    },
    category_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: 'category', // References the Category model
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
