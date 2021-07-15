const express = require("express");


const app = express();
const bGround = require("fcc-express-bground");

bGround.log("Hello World");

  app.get("/",  (req, res) => {
    res.send("Hello World");
  });


 module.exports = app;
