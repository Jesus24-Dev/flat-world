const sequelize = require("../db/migrations/migrations");
const { Estudiante, Seccion, Resultados } = require("../db/models/index");

class Perfil {
  static async crearConexion() {
    await sequelize.sync({ force: true });
    await Perfil.llenarDatos();
  }

  static async llenarDatos() {
    const count = await Seccion.count();

    if (count === 0) {
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

  static async aumentarFallos(cedula, fecha) {
    try {
      const resultadoExistente = await Resultados.findOne({
        where: {
          cedula,
          fecha,
        },
      });

      if (resultadoExistente) {
        await resultadoExistente.increment("fallos", { by: 1 });
        console.log(
          `Fallos incrementado en 1. Nuevos fallos: ${
            resultadoExistente.fallos + 1
          }`
        );
      } else {
        await Resultados.create({
          cedula,
          fecha,
          aciertos: 0,
          fallos: 1,
        });
        console.log("Nuevo fallo creado.");
      }
    } catch (error) {
      console.error("Error al verificar o actualizar el resultado:", error);
    }
  }

  static async aumentarAciertos(cedula, fecha) {
    try {
      const resultadoExistente = await Resultados.findOne({
        where: {
          cedula,
          fecha,
        },
      });

      if (resultadoExistente) {
        await resultadoExistente.increment("aciertos", { by: 1 });
        console.log(
          `Fallos incrementado en 1. Nuevos aciertos: ${
            resultadoExistente.aciertos + 1
          }`
        );
      } else {
        await Resultados.create({
          cedula,
          fecha,
          aciertos: 1,
          fallos: 0,
        });
        console.log("Nuevo acierto creado.");
      }
    } catch (error) {
      console.error("Error al verificar o actualizar el resultado:", error);
    }
  }

  static async obtenerResultados(cedula) {
    try {
      const resultados = await Resultados.findAll({
        where: {
          cedula,
        },
      });
      if (resultados.length === 0) {
        return {
          mensaje: `No se encontraron resultados para la cédula ${cedula}`,
        };
      } else {
        const resultadosJSON = resultados.map((resultado) => ({
          fecha: resultado.fecha,
          aciertos: resultado.aciertos,
          fallos: resultado.fallos,
        }));
        return { cedula, resultados: resultadosJSON };
      }
    } catch (error) {
      console.error("Error al obtener los resultados:", error);
      return { error: "Error al obtener los resultados" };
    }
  }
}

module.exports = Perfil;
