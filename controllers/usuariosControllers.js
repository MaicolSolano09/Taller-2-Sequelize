let usuarioService = require("../services/usuarioServices");

class UsuarioController {
  static async obtenerUsuarios(req, res) {
    try {
      let resultI = await usuarioService.obtenerUsuarios();
      res.json(resultI);
    } catch (e) {
      console.log("Error al obtener el Usuario: ", e);
      res.json({ mensaje: "No se pudieron obtener el Usuario." });
    }
  }

  static async obtenerUsuariosId(req, res) {
    try {
      let resultado = await usuarioService.obtenerUsuariosId(req.params.id);
      if (!resultado) {
        return res.json({ mensaje: "Usuario no encontrado" });
      }
      res.json(resultado);
    } catch (e) {
      console.log("Error al obtener el Usuario por ID:", e);
      res.json({ mensaje: "Error al obtener el Usuario." });
    }
  }

  static async registrarUsuarios(req, res) {
    try {
      let register = await usuarioService.registrarUsuarios(req.body);
      res.json(register);
    } catch (e) {
      console.log("Error al registrar el Usuario:", e);
      res.json({ mensaje: "Error al registrar el Usuario." });
    }
  }

  static async actualizarUsuarios(req, res) {
    try {
      let actualizar = await usuarioService.actualizarUsuarios(
        req.params.id,
        req.body
      );
      if (actualizar == 0) {
        return res.json({ mensaje: "Usuario no encontrado u no actualizado" });
      } else {
        return res.json({ mensaje: "Usuario actualizado correctamente" });
      }
    } catch (e) {
      console.log("Error al actualizar el Usuario:", e);
      res.json({ mensaje: "Error al actualizar el Usuario." });
    }
  }

  static async eliminarUsuarios(req, res) {
    try {
      let eliminar = await usuarioService.eliminarUsuarios(req.params.id);
      if (eliminar == 0) {
        return res.json({ mensaje: "Usuario no encontrado u no eliminado" });
      } else {
        return res.json({ mensaje: "Usuario eliminado correctamente" });
      }
    } catch (e) {
      console.log("Error al eliminar el Usuario:", e);
      res.json({ mensaje: "Error al eliminar el Usuario." });
    }
  }
}
module.exports = UsuarioController;
