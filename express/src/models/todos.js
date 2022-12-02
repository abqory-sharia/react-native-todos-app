const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Todos extends Model {}

Todos.init(
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    job: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    done: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { sequelize, modelName: "Todos", underscored: true }
);

module.exports = Todos;
