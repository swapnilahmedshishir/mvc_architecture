const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const UserRoute = require("./routes/user.route");
const multer = require("multer");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//file uplode 
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uplodeFile/')
  },
  filename: function (req, file, cb) {
    const name = Date.now() + '-' + file.originalname ;
    cb(null, name)
  },
});

const upload = multer({ storage: storage })
// regiter 
app.get("/register", (req, res) => {
  res.status(200).sendFile(__dirname + "/views/index.html");
});

app.post("/register", upload.single('imageFile'), (req, res) => {
  
 res.status(200).send('file is uploded');
});

// own Rooute
// app.use("/users", UserRoute);

// home routea
app.get("/", (req, res) => {
  res.status(200).send("testing api")
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
