const { DataTypes, Model } = require("sequelize");
const sequelize = require("../migrations/migrations");

class Estudiante extends Model {}

Estudiante.init(
  {
    cedula: {
      type: DataTypes.STRING(20),
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    seccionId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "estudiante",
    timestamps: false,
  }
);

module.exports = Estudiante;
