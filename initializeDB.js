const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');
const sequelize = require('./connectDB');
const Product = require('./models/product');
const ProductVariety = require('./models/product-variety');

const initialize = async () => {
  const db = 'vasiti';
  const password = process.env.PASSWORD;

  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: process.env.PASSWORD,
    });

    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${db}\`;`);

    Product.hasMany(ProductVariety);
    ProductVariety.belongsTo(Product);

    await sequelize.sync();
  } catch (err) {
    console.log(err);
  }
};

module.exports = initialize;
