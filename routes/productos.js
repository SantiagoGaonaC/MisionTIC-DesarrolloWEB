const express = require("express");
const router = express.Router();

const productoController = require("../controllers/productoController");

//ruta obtener
router.get("/api", productoController.mostrar);
//crear
router.post("/api/productos", productoController.crear);
//borrar
router.delete("/api/productos/:productoId", productoController.borrar);
//actualizar
router.put("/api/productos/:productoId", productoController.actualizar);

module.exports = router;
