const mysql = require("mysql");

// Kartik credentials
// if(process.env.JAWSDB_URL){
//   console.log("connected to jaws db");
//   var config = mysql.createConnection(process.env.JAWSDB_URL);

// } else {
//   console.log("connected to local sql db");


  var config = mysql.createConnection({
    host:"l0ebsc9jituxzmts.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    // host:"152.57.100.240",
    port: 3306,
    user: "pbf2gc5gxumgdgmd",
    password: "e1y5a5eyr3d6wjrh",
    database: "wyupwe9cl8igfjie",
    insecureAuth : true,
    dialect: "mysql"
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
