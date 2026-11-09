const express = require("express");
const router = express.Router();
const productoController = require("../Controller/productoController");
// obtener productos (GET)
router.get("/productos", (req, res) => {
    productoController.obtenerProductos(req, res);
});

//crear un producto (POST)
router.post("/productos", (req, res) => {
    productoController.crearProducto(req, res);
});

module.exports = router;