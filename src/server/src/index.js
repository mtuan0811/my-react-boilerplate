var express = require("express");
var cors = require("cors");
var app = express();
var bodyParser = require('body-parser')

const data = require('./db.json')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());

app.get("/auth/profile", function (req, res, next) {
    res.json({ code: 200, message: "Successfully", data: data.user });
});

app.post("/auth/login", function (req, res, next) {
  const { email, password } = req.body;
  console.log(email)
  console.log(password)
  if (!email || !password) {
    res.status(400).json({ code: 400, message: "Bad Request", data: null });
  }
  if(email !== data.account.email || password !== data.account.password){
    res.status(401).json({ code: 401, message: "UnAuthorization", data: null });
  }
  res.json({ code: 200, message: "Successfully", data: data.user });
});

app.listen(3001, function () {
  console.log("Web server listening on port 3001");
});
