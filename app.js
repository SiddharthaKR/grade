//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/",(req,res)=>{
  res.render("home")
});

app.post("/cpi",(req,res)=>{

  res.render("cpi")
});

app.post("/spi",(req,res)=>{

  res.render("calculate")
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
