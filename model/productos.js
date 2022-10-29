const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productosSchema = new Schema(
  {
    nombre: String,
    descripcion: String,
    cantidad: Number,
    precio: Number,
    descuento: Number,
    stock: Number
  },
  { versionKey: false }
);

module.exports = mongoose.model("Producto", productosSchema);