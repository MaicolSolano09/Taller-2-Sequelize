//para establecer lo que tienen las tabla de la base de datos
let DataTypes = require("sequelize");
let sequelize = require("../config//db");
let Evento=require("../models/eventoModel");
let Usuario=require("../models/usuarioModel");



let Inscripcion = sequelize.define(
  "inscripciones",
  {
    ID_EVENTO: {
        type: DataTypes.STRING,
        allowNull: false,
        references:{
            model:Evento,
            key:'id'
        }
      },
      ID_USUARIO: {
        type: DataTypes.TEXT,
        allowNull: false,
        references:{
            model:Usuario,
            key:'id'
        }
      },
      FECHA_INSCRIPCION: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      ESTADO: {
        type: DataTypes.ENUM("Activo","Cancelado"),
        allowNull: false,
        defaultValue: "Activo"
      },
    },
  {
    tableName: "inscripciones",
    timestamps: false,
    
  }
);
Inscripcion.belongsTo(Evento, { foreignKey: "ID_EVENTO" });
Inscripcion.belongsTo(Usuario, { foreignKey: "ID_USUARIO" });
module.exports = Inscripcion;
