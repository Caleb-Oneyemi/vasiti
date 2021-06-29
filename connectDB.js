const { Sequelize } = require('sequelize');

const password = process.env.PASSWORD;

const sequelize = new Sequelize('vasiti', 'root', password, {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
