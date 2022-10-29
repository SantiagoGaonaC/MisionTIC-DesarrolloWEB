const productoModel = require("../model/productos");

module.exports.mostrar = (req, res) => {
  productoModel.find({}, (error, productos) => {
    if (error) {
      return res.status(500).json({
        message: "Error mostrando los productos"
      });
    }
    res.send(200, productos);
  });
};

module.exports.crear = (req, res) => {
  console.log("POST /api/productos");
  console.log(req.body);

  let productoConfig = new productoModel({
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    cantidad: req.body.cantidad,
    precio: req.body.precio,
    descuento: req.body.descuento,
    stock: req.body.stock
  });

  productoConfig.save((error, productos) => {
    if (error) {
      res.status(500).send({ message: `Error al guardar en MONGODB ${error}` });
    }
    res.status(200).send({ productoConfig: productos });
  });
};

module.exports.borrar = (req, res) => {
  let productoId = req.params.productoId;

  productoModel.findById(productoId, (error, producto) => {
    if (error)
      res
        .status(500)
        .send({ message: `Error al borrar el producto ${productoId}` });
    producto.remove((error) => {
      if (error)
        res
          .status(500)
          .send({ message: `Error al borrar el producto ${productoId}` });
    });
    res.status(200).send({ message: "El producto ha sido eliminado" });
  });
};

module.exports.actualizar = (req, res) => {
  let productoId = req.params.productoId;
  let actualizar = req.body;
  productoModel.findByIdAndUpdate(
    productoId,
    actualizar,
    (error, productoActualizado) => {
      if (error)
        res.status(500).send({
          message: `Error al actualizar el producto ${productoActualizado}`
        });
      res.status(200).send({ producto: productoActualizado });
    }
  );
};
