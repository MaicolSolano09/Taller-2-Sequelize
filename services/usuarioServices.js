const eventos = require("../models/eventoModel");
let usuario = require("../models/usuarioModel");

class UsuarioService {
  static async obtenerUsuarios() {
    try {
      let obtenerI = await usuario.findAll();
      return obtenerI;
    } catch (e) {
      console.log(e);
    }
  }
  static async registrarUsuarios(datos) {
    try {
      let registerI = await usuario.create(datos);
      return registerI;
    } catch (err) {
      console.log(err);
    }
  }
  static async obtenerUsuariosId(id) {
    try {
      let obtenerId = await usuario.findByPk(id);
      if (!obtenerId) {
        console.log("Usuario no encontrado");
      } else {
        return obtenerId;
      }
    } catch (e) {
      console.log("error al obtener el Usuario");
    }
  }

  static async actualizarUsuarios(id, datos) {
    try {
      let actualizar = await usuario.update(datos, { where: { id } });
      if (actualizar == 0) {
        console.log("no se encontro el Usuario a actualizar");
      } else {
        return actualizar;
      }
    } catch (e) {
      console.log("Error al actualizar");
    }
  }
  static async eliminarUsuarios(id) {
    let eliminar = await usuario.destroy({ where: { id } });
    if (eliminar == 0) {
      console.log("No se encontro el Usuario a eliminar");
    } else {
      return eliminar;
    }
  }
}

module.exports = UsuarioService;
