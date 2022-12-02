const Sequelize = require("sequelize");

const sequelize = new Sequelize("todos_app", "root", "fedoralinux", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

module.exports = sequelize;
