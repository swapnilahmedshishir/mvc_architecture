import express from "express";
import { AdminRouter } from "./Routes/Admin.Router.js";
const app = express();

app.use('/admin' , AdminRouter)

app.use((req,res) => {
    res.send("<h1>404!! router is not aviable </h1>")
})


export {app}