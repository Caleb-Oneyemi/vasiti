const { DataTypes } = require('sequelize');

const sequelize = require('../connectDB');

const Product = sequelize.define(
  'product',
  {
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'product',
    timeestamps: true,
    createdAt: 'date_uploaded',
    updatedAt: 'date_edited',
  }
);

module.exports = Product;
