const eventosRoutes=require("./routes/eventoRoutes");
const inscripcionRoutes=require("./routes/InscripcionRoutes");
const usuariosRoutes=require("./routes/usuarioRoutes");
const express = require("express");
const dotenv = require("dotenv");
let sequelize = require("./config/db");

require("dotenv").config();
const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use("/api",eventosRoutes);
app.use("/api",inscripcionRoutes);
app.use("/api",usuariosRoutes);


let startDB = async () => {
  try {
    await sequelize.sync();
    console.log(`Base de Datos Sincronizada`)
    app.listen(port, () => {
      console.log(`El sevidor esta corriendo en el http://localhost: ${port}`);
    });
  } catch (e) {
    console.log(`Error al conectar con la Base de Datos`);
  }
};
startDB();