const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//requerir la conexión
const db = require("./db");

//setear motor de plantillas
app.set("view engine", "ejs");

//formato JSON para creación y edición
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

const productos = require("./routes/productos");
app.use(productos);

app.listen(3000, () => {
  console.log("¡Server ON! en http://localhost:3000");
});
