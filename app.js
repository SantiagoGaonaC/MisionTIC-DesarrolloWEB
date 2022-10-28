const express = require("express");
const app = express();

//setear motor de plantillas
app.set("view engine", "ejs");

//formato JSON para creación y edición
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("WEB!");
});

app.listen(3000, () => {
  console.log("¡Server ON! en http://localhost:3000");
});
