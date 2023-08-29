import express from "express";
import bodyParser from "body-parser";
import {sendNotification, startNotificationListener} from "./listener.mjs";
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Express permite crear una API
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hola Mundo!")
})

app.get("/test:nombre", (req, res) => {
  res.send("test" + req.params.nombre)
})

//Tareita POST
app.post("/", (req, res) => {

  /*
  let nombre = req.body.nombre
  let edad = req.body.edad

  console.log("JSON recibido:", req.body);

  let post = res.json({
    mensaje: `Metodo Post. Mi nombre es  ${nombre} y tengo ${edad} años`
  })
  */
  //console.log(req.body);
  sendNotification(req.body);
  res.send("Peticion POSTS");

})

startNotificationListener();

app.listen(port, () => {
  console.log("http.localhost:3000")

})


