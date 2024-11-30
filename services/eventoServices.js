let evento = require("../models/eventoModel");

class EventoService {
  static async obtenerEventos() {
    try {
      let obtener = await evento.findAll();
      return obtener;
    } catch (e) {
      console.log(e);
    }
  }
  static async registrarEventos(datos) {
    try {
      let register = await evento.create(datos);
      return register;
    } catch (err) {
      console.log(err);
    }
  }
  static async obtenerEventosId(id) {
    try {
      let obtenerId = await evento.findByPk(id);
      if (!obtenerId) {
        console.log("Evento no encontrado");
      } else {
        return obtenerId;
      }
    } catch (e) {
      console.log("error al obtener el Evento");
    }
  }

  static async actualizarEventos(id, datos) {
    try {
      let actualizar = await evento.update(datos, { where: { id } });
      if (actualizar == 0) {
        console.log("no se encontro el Evento a actualizar");
      } else {
        return actualizar;
      }
    } catch (e) {
      console.log("Error al actualizar");
    }
  }
  static async eliminarEventos(id) {
    let eliminar = await evento.destroy({ where: { id } });
    if (eliminar == 0) {
      console.log("No se encontro el Evento a eliminar");
    } else {
      return eliminar;
    }
  }
}

module.exports = EventoService;
