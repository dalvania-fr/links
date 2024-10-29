const path = require("path");
const http = require("http");
const https = require("https");
const fs = require("fs");

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express(); // https
const app2 = express(); // http

dotenv.config();

let i = 0;

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("public"));
app.enable("trust proxy");

app.get("/", (_, res) => {
  i++;
  res.sendFile(path.join(__dirname, "./public/hellopage.html"));
});

app.get("/nbr/of/visit/secret/uwu/jsp/aaaaaaaaaaaa/", (req, res) => {
  res.json({
    nombreVisit: i
  })
})

http.createServer(app).listen(80, process.env.ip);
