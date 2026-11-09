class PruebaController{
    obtenerPrueba(req,res){
        res.status(200).json({
            estado: "exitoso",
            mensaje: "esto es una prueba"
        });
    }
}

module.exports = new PruebaController();