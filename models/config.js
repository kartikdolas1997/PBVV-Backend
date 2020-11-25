const mysql = require("mysql");

// Kartik credentials
var config = mysql.createConnection({
  host: "localhost",
  user: "newuser",
  password: "user_password",
  database: "abc",
});

config.connect(function (err) {
  if (err) throw err;
  else console.log("connection created successfully");
});

module.exports = config;
