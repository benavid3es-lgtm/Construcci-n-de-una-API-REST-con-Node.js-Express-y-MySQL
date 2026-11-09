const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const pruebaRoutes = require ("./src/routes/pruebaRoutes")
const usuariosRoutes = require("./src/routes/usuarioRoutes");

const app = express();
const PORT = 8000;

// Middlewares
app.use(express.json());
app.use(cors());

app.use("/api", pruebaRoutes);
app.use("/api", usuariosRoutes);


const conexion = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "Admin", 
    database: "taller_api",
    port: 3306
});

conexion.connect((error) => {
    if (error) {
        console.log("Error de conexión a la base de datos:", error);
    } else {
        console.log("Conexión exitosa a la base de datos MySQL");
        app.set("db", conexion);
    }
});

// Ruta de prueba inicial
app.get("/prueba", (req, res) => {
    res.json({ mensaje: "Servidor funcionando correctamente" });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto ${PORT}`);
});