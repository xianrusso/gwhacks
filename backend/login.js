const mysql = require("mysql");
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");

const port = normalizePort(process.env.PORT || "9000");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "login"
});

let app = express();
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "../frontend/src/pages/login.js"));
});

app.post("/auth");

app.set("port", port);
