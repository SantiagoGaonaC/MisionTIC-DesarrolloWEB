const producto = require("../model/productos");

module.exports.mostrar = (req, res) => {
  producto.find({}, (error, productos) => {
    if (error) {
      return res.status(500).json({
        message: "Error mostrando los productos"
      });
    }
    res.send(200, productos);
  });
};
