const { DataTypes } = require('sequelize');
const sequelize = require('../connectDB');
const Product = require('../models/product');

const ProductVareity = sequelize.define(
  'productVariety',
  {
    size: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    images: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      references: {
        model: Product,
        key: 'id',
      },
    },
  },
  {
    tableName: 'productVariety',
  }
);

module.exports = ProductVareity;
