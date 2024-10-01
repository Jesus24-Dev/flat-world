// Resultados.js
const { DataTypes, Model } = require("sequelize");
const sequelize = require("../migrations/migrations");
const Estudiante = require("./Estudiante");

class Resultados extends Model {}
Resultados.init(
  {
    cedula: {
      primaryKey: true,
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Estudiante,
        key: "cedula",
      },
    },
    fecha: {
      primaryKey: true,
      type: DataTypes.STRING,
      allowNull: false,
    },
    aciertos: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fallos: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "resultados",
    timestamps: false,
  }
);

Resultados.primaryKeyAttributes = ["CEDULA", "FECHA"];

module.exports = Resultados;
