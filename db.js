const mongoose = require("mongoose");
const url =
  "mongodb+srv://root:root@cluster0.mk78hvn.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error al conectar MongoDB"));
db.once("open", function callback() {
  console.log("¡Conectado a MongoDB");
});

module.exports = db;
