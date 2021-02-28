const mysql = require("mysql");

// Kartik credentials
// if(process.env.JAWSDB_URL){
//   console.log("connected to jaws db");
//   var config = mysql.createConnection(process.env.JAWSDB_URL);

// } else {
//   console.log("connected to local sql db");


  var config = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT
  });

  // var config = mysql.createConnection({
  //   host: "localhost",
  //   user: "root",
  //   password: "goodness",
  //   database: "abc",
  // });
// }



config.connect(function (err) {
  if (err) throw err;
  else console.log("connection created successfully");
});

module.exports = config;
