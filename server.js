const mysql = require("mysql");
const express = require("express");
const cors = require("cors");

const http = require("http");
const { json } = require("body-parser");
require("dotenv").config();
const PORT = process.env.PORT || 3000;

let app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/api", require("./routes"));

// app.get("/", (req,res)=>{
//   res.send("krushn")
// })

app.listen(PORT, () => {
  console.log("Listening on Port", PORT);
});
