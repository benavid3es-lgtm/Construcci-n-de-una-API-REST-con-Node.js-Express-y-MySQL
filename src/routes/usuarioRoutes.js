const express = require("express");
const router = express.Router();
const usuarioController = require("../Controller/usuarioController");

// Ruta para obtener usuarios (GET)
router.get("/usuarios", (req, res) => {
    usuarioController.obtenerUsuarios(req, res);
});

// Ruta para crear un usuario (POST)
router.post("/usuarios", (req, res) => {
    usuarioController.crearUsuario(req, res);
});

module.exports = router;