const express = require("express");
const router = express.Router();
const pruebaController = require("../Controller/pruebaController");

router.get("/prueba", (req,res) => {
    pruebaController.obtenerPrueba(req,res);
});
module.exports = router;