const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "18092002", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
