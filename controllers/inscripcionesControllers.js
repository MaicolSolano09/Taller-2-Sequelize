const inscripcionService = require("../services/inscripcionServices");
const Inscripcion = require("../models/inscripcionModel");
const conn = require("../config/db");

class InscripcionController {
  // Crear una inscripción
  static async crearInscripcion(req, res) {
    const { ID_USUARIO, ID_EVENTO } = req.body;
    try {
      const inscripcion = await inscripcionService.inscribirUsuario(
        ID_USUARIO,
        ID_EVENTO
      );
      res.json(inscripcion);
    } catch (error) {
      res.json({ error: error.message });
    }
  }

  // Obtener número de inscripciones por evento
  static async NumInscripcionesEventos(req, res) {
    try {
      // Consulta para obtener el número de inscripciones por evento
      const [resultado] = await conn.query(`
        SELECT 
            e.ID AS ID,
            e.NOMBRE AS NOMBRE,
            COUNT(i.ID) AS numero_de_inscripciones
        FROM 
            EVENTOS e
        LEFT JOIN 
            INSCRIPCIONES i ON e.ID = i.ID_EVENTO
        GROUP BY 
            e.ID
        ORDER BY 
            numero_de_inscripciones DESC;
      `);

      if (resultado.length > 0) {
        const eventos = resultado.map((evento) => ({
          ID: evento.ID,
          NOMBRE: evento.NOMBRE,
          numero_de_inscripciones: evento.numero_de_inscripciones,
        }));

        res.json(eventos);
      } else {
        res.json({ mensaje: "No se encontraron eventos." });
      }
    } catch (error) {
      res.json({
        error:
          "Error al obtener el número de inscripciones en cada evento: " +
          error.message,
      });
    }
  }
  static async cancelarInscripcion(req, res) {
    const { ID_USUARIO, ID_EVENTO } = req.body;

    try {
      const inscripcion = await Inscripcion.update(
        { ESTADO: "Cancelado" },
        {
          where: {
            ID_USUARIO: ID_USUARIO,
            ID_EVENTO: ID_EVENTO,
            ESTADO: "Activo",
          },
        }
      );

      if (inscripcion[0] > 0) {
        res.json({ mensaje: "Inscripción cancelada exitosamente." });
      } else {
        res.json({
          mensaje: "No se encontró una inscripción activa para cancelar.",
        });
      }
    } catch (error) {
      res.json({ error: "Error al cancelar la inscripción: " + error.message });
    }
  }
}

module.exports = InscripcionController;
