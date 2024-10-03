const Estudiante = require("./Estudiante");
const Seccion = require("./Seccion");
const Resultados = require("./Resultados");

Estudiante.belongsTo(Seccion, {
  foreignKey: "seccionId",
  as: "seccion",
});

Seccion.hasMany(Estudiante, {
  foreignKey: "seccionId",
  as: "estudiantes",
});

Estudiante.hasMany(Resultados, { foreignKey: "cedula" });
Resultados.belongsTo(Estudiante, { foreignKey: "cedula" });

module.exports = { Estudiante, Seccion, Resultados };
