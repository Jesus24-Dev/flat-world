const sequelize = require("../db/migrations/migrations");
const { Estudiante, Seccion } = require("../db/models/index");

class Perfil {
  static async crearConexion() {
    await sequelize.sync();
    await Perfil.llenarDatos();
  }

  static async llenarDatos() {
    const count = await Seccion.count(); // Cuenta los registros en la tabla

    if (count === 0) {
      // Si no hay registros, poblar la tabla
      await Seccion.bulkCreate([
        { nombre: "A" },
        { nombre: "B" },
        { nombre: "C" },
      ]);
    }
  }

  static async crearEstudiante(cedula, nombre, apellido, seccionNombre) {
    const seccion = await Seccion.findOne({
      where: { nombre: seccionNombre },
    });

    if (seccion) {
      await Estudiante.create({
        cedula,
        nombre,
        apellido,
        seccionId: seccion.id,
      });
    } else {
      throw new Error("Sección no encontrada");
    }
  }

  static async encontrarEstudiante(cedula, seccionNombre) {
    const seccion = await Seccion.findOne({
      where: { nombre: seccionNombre },
    });
    const nombreEstudiante = await Estudiante.findOne({
      where: { cedula, seccionId: seccion.id },
      attributes: ["cedula", "nombre", "apellido"],
    });
    if (!nombreEstudiante) {
      return false;
    }
    return {
      cedula: nombreEstudiante.cedula,
      nombre: nombreEstudiante.nombre,
      apellido: nombreEstudiante.apellido,
      seccion: seccion.nombre,
    };
  }
}

module.exports = Perfil;
