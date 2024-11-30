//para establecer lo que tienen las tabla de la base de datos
let DataTypes = require("sequelize");
let sequelize = require("../config/db");

let usuario = sequelize.define(
  "usuarios",
  {
    NOMBRE: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    CORREO: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ROL: {
      type: DataTypes.ENUM("Administrador", "Usuario"),
      allowNull: false,
      defaultValue: "Usuario",
    },
  },
  {
    tableName: "usuarios",
    timestamps: false,
  }
);

module.exports = usuario;
