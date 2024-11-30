let Inscripcion = require("../models/inscripcionModel");
const Evento = require('../models/eventoModel');

const inscribirUsuario = async (ID_USUARIO, ID_EVENTO) => {
    // Verificar si el usuario ya está inscrito en el evento
    const inscripcionExistente = await Inscripcion.findOne({
      where: { ID_USUARIO: ID_USUARIO, ID_EVENTO: ID_EVENTO }
    });
    if (inscripcionExistente) {
      throw new Error('El usuario ya está inscrito en este evento.');
    }

    // Verificar que el evento exista
    const evento = await Evento.findByPk(ID_EVENTO);
    if (!evento) {
      throw new Error('El evento no existe.');
    }

    // Verificar que haya espacio en el evento
    const inscripciones = await Inscripcion.count({ where: { ID_EVENTO: ID_EVENTO } });
    if (inscripciones >= evento.capacidad_maxima) {
      throw new Error('El evento está completo.');
    }

    // Crear inscripción
    const nuevaInscripcion = await Inscripcion.create({
        ID_USUARIO: ID_USUARIO,
        ID_EVENTO: ID_EVENTO
    });
  
    return nuevaInscripcion;
};
module.exports={
    inscribirUsuario
}