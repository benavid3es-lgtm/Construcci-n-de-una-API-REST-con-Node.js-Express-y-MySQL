class UsuarioController {
    
    // consulta
    obtenerUsuarios(req, res) {
        const db = req.app.get("db");
        db.query("SELECT * FROM usuarios", (error, resultados) => {
            if (error) {
                res.status(500).json({ mensaje: "Error al consultar los usuarios", error });
            } else {
                res.status(200).json(resultados);
            }
        });
    }

   // agregar un nuevo usuario
    crearUsuario(req, res) {
        const db = req.app.get("db");
        const { nombre, apellido, direccion, telefono } = req.body;

        const query = "INSERT INTO usuarios (nombre, apellido, direccion, telefono) VALUES (?, ?, ?, ?)";
        
        db.query(query, [nombre, apellido, direccion, telefono], (error, resultado) => {
            if (error) {
                res.status(500).json({ mensaje: "Error al registrar el usuario", error });
            } else {
                res.status(201).json({
                    mensaje: "Usuario creado con éxito",
                    datos:{ nombre, apellido, direccion, telefono }
                });
            }
        });
    }
}

module.exports = new UsuarioController();