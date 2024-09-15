const { DataTypes, Model } = require("sequelize");
const sequelize = require("../migrations/migrations");

class Seccion extends Model {}

Seccion.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    nombre: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "seccion",
    timestamps: false,
  }
);

module.exports = Seccion;
