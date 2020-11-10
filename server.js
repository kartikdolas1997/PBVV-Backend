const mysql = require("mysql");
const express = require("express");
const cors = require("cors");

// const logger = require('morgan')
const http = require("http");
const { json } = require("body-parser");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
// const UPLOADS_DIR = process.env.UPLOADS_DIR
// const PUBLIC_DIR = path.join(__dirname, process.env.PUBLIC_DIR)

let app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/api", require("./routes"));
//   var quer_sql = "update abc.new_table SET names = '123' where id =1";
//   config.query(quer_sql, function (err, result) {
//     if (err) throw err;
//     console.log(result.affectedRows + " record(s) updated");
//   });
app.listen(PORT, () => {
  console.log("Listening on Port", PORT);
});
