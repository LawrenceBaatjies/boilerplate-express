const express = require("express");

const app = express();
const bGround = require("fcc-express-bground");


  app.get("/",  (req, res) => {
    bGround.log("Hello World");
  });


 module.exports = app;
