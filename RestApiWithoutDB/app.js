const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const UserRoute = require("./routes/user.route");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// own Rooute
app.use("/users", UserRoute);

// home route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// Route not founde
app.use((req, res, next) => {
  res.status(404).json({
    message: "Route Not found!",
  });
});
// server Erro
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Somthing Broke!",
  });
});
module.exports = app;
