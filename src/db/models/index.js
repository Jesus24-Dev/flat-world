const Estudiante = require("./Estudiante");
const Seccion = require("./Seccion");

Estudiante.belongsTo(Seccion, {
  foreignKey: "seccionId",
  as: "seccion",
});

Seccion.hasMany(Estudiante, {
  foreignKey: "seccionId",
  as: "estudiantes",
});

module.exports = { Estudiante, Seccion };
