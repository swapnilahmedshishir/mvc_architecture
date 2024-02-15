import express from "express";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import bodyParser from "body-parser";

const filName  = dirname(fileURLToPath(import.meta.url));

const port = 3001;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 

app.get('/' , (req , res) => {
    res.sendFile(filName + "/index.html");
});
app.get('/circle' , (req , res) => {
    res.sendFile(filName + "/circle.html");
});
app.get('/triangle' , (req , res) => {
    res.sendFile(filName + "/triangle.html");
});

app.post("/triangle", (req, res) => {
    const height = req.body.height;
    const base = req.body.base;
    const area = 0.5 * base * height;
    res.send(`<h2>Area of Triangle is : ${area}</h2>`);
  });

  app.post("/circle", (req, res) => {
    const radius = req.body.radius;
    const area = Math.PI * radius * radius;
    res.send(`<h2>Area of Circle is : ${area}</h2>`);
  });

app.listen(port , () => {
    console.log(`server is running http://localhost:${port} `);
});
