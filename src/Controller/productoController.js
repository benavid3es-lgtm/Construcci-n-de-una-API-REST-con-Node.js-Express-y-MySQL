class ProductoController {
    
    // Método para consultar todos los productos (GET)
    obtenerProductos(req, res) {
        const db = req.app.get("db");
        db.query("SELECT * FROM productos", (error, resultados) => {
            if (error) {
                res.status(500).json({ mensaje: "Error al consultar los productos", error });
            } else {
                res.status(200).json(resultados);
            }
        });
    }

    // Método para registrar un nuevo producto (POST)
    crearProducto(req, res) {
        const db = req.app.get("db");
        // Ajusta los campos según los que tenga tu tabla "productos" en MySQL
        const { nombre, descripcion, precio, stock } = req.body;

        const query = "INSERT INTO productos (nombre, descripcion, precio, stock) VALUES (?, ?, ?, ?)";
        
        db.query(query, [nombre, descripcion, precio, stock], (error, resultado) => {
            if (error) {
                res.status(500).json({ mensaje: "Error al registrar el producto", error });
            } else {
                res.status(201).json({
                    mensaje: "Producto creado con éxito",
                    id: resultado.insertId,
                    datos: { nombre, descripcion, precio, stock }
                });
            }
        });
    }
}

module.exports = new ProductoController();