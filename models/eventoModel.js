//para establecer lo que tienen las tabla de la base de datos
let DataTypes = require("sequelize");
let sequelize = require("../config/db");

let eventos = sequelize.define(
  "eventos",
  {
    NOMBRE: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    DESCRIPCION: {
      type: DataTypes.TEXT,
    },
    FECHA_HORA: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    LUGAR:{
        type:DataTypes.STRING,
    },
    CAPACIDAD_MAX:{
        type:DataTypes.INTEGER,
        allowNull: false,
    }
  },
  {
    tableName: "eventos",
    timestamps: false,
    
  }
);

module.exports = eventos;
