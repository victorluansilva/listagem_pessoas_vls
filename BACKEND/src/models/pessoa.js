// const { Sequelize, DataTypes } = require("sequelize");
// const mySQL = new Sequelize(
//   process.env.DATABASE,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: process.env.DB_HOST,
//     dialect: "mysql",
//     port: process.env.DB_PORT,
//   }
// );

const mySQLcon = require("../../connection");

const Pessoa = mySQLcon.config.define(
  "Pessoa",
  {
    id: {
      type: mySQLcon.dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nome: {
      type: mySQLcon.dataTypes.STRING,
      allowNull: false,
    },
    sobrenome: {
      type: mySQLcon.dataTypes.STRING,
    },
    idade: {
      type: mySQLcon.dataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "pessoa",
  }
);

module.exports = Pessoa;
