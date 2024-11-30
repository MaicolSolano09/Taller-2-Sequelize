const conn = require('../config/db');
const eventoService = require("../services/eventoServices");

class EventosController {
  static async obtenerEventos(req, res) {
    try {
      let resultO = await eventoService.obtenerEventos();
      res.json(resultO);
    } catch (e) {
      console.log("Error al obtener los eventos:", e);
      res.json({ mensaje: "No se pudieron obtener los eventos." });
    }
  }
    
  static async obtenerEventosId(req, res) {
    try {
      let resultado = await eventoService.obtenerEventosId(req.params.id);
      if (!resultado) {
        return res.json({ mensaje: "Evento no encontrado" });
      }
      res.json(resultado);
    } catch (e) {
      console.log("Error al obtener el Evento por ID:", e);
      res.json({ mensaje: "Error al obtener el Evento." });
    }
  }

  static async registrarEventos(req, res) {
    try {
      let register = await eventoService.registrarEventos(req.body);
      res.json(register);
    } catch (e) {
      console.log("Error al registrar el Evento:", e);
      res.json({ mensaje: "Error al registrar el Evento." });
    }
  }

  static async actualizarEventos(req, res) {
    try {
      let actualizar = await eventoService.actualizarEventos(
        req.params.id,
        req.body
      );
      if (actualizar == 0) {
        return res.json({ mensaje: "Evento no encontrado u no actualizado" });
      } else {
        return res.json({ mensaje: "Evento actualizado correctamente" });
      }
    } catch (e) {
      console.log("Error al actualizar el Evento:", e);
      res.json({ mensaje: "Error al actualizar el Evento." });
    }
  }

  static async eliminarEventos(req, res) {
    try {
      let eliminar = await eventoService.eliminarEventos(req.params.id);
      if (eliminar == 0) {
        return res.json({ mensaje: "Evento no encontrado u no eliminado" });
      } else {
        return res.json({ mensaje: "Evento eliminado correctamente" });
      }
    } catch (e) {
      console.log("Error al eliminar el Evento:", e);
      res.json({ mensaje: "Error al eliminar el Evento." });
    }
  }

  // Método para obtener el evento más popular
  static async EventoMasPopular(req, res) {
    try {
      const [resultado] = await conn.query(`
        SELECT 
          e.ID AS evento_id,
          e.NOMBRE AS nombre_evento,
          COUNT(i.ID) AS numero_de_inscripciones
        FROM 
          EVENTOS e
        LEFT JOIN 
          INSCRIPCIONES i ON e.ID = i.ID_EVENTO
        GROUP BY 
          e.ID
        ORDER BY 
          numero_de_inscripciones DESC
        LIMIT 5;
      `);
      res.json(resultado); 
    } catch (error) {
      res.json({ error: 'Error al obtener el evento más popular: ' + error });
    }
  }
}

module.exports = EventosController;
