const mysql = require("mysql");

// Kartik credentials
if(process.env.JAWSDB_URL){
  var config = mysql.createConnection(process.env.JAWSDB_URL);

} else {

  // var config = mysql.createConnection({
  //   host: "localhost",
  //   user: "root",
  //   password: "goodness",
  //   database: "abc",
  // });
}



config.connect(function (err) {
  if (err) throw err;
  else console.log("connection created successfully");
});

module.exports = config;
