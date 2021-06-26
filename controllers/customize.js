const config = require("../models/config");

async function submit_candi(req, res) {

  try{
    console.log(req.body);
  const { G1, G2, G3, G4, B1, B2, B3, B4 } = req.body;
  let girls = [G1, G2, G3, G4];
  let boys = [B1, B2, B3, B4];
  let house = "red";

  let query =
    // "INSERT INTO new_table (house,gender_id,names) VALUES (?,?,?)";
    "UPDATE new_table SET names = ? WHERE id = ?;";

  girls.forEach((girl) => {
    ID = girls.indexOf(girl) + 5;
    console.log("ID " + ID + "  " + "girl " + girl);
    config.query(query, [girl, ID], function (err, rows, fields) {
      console.log({ err, rows, fields });
    });
  });

  boys.forEach((boy) => {
    ID = boys.indexOf(boy) + 1;
    console.log("ID " + ID + "  " + "boy " + boy);
    config.query(query, [boy, ID], function (err, rows, fields) {
      console.log({ err, rows, fields });
    });
  });

  res.send({ success: true });
  } catch(e){
    console.error(e);
  }
  
}

async function submit_candi_yellow(req, res) {
  console.log("Yellow called");
  console.log(req.body);
  const { G1, G2, G3, G4, B1, B2, B3, B4 } = req.body;
  let girls = [G1, G2, G3, G4];
  let boys = [B1, B2, B3, B4];
  let house = "yellow";

  let query =
    // "INSERT INTO new_table (house,gender_id,names) VALUES (?,?,?)";
    "UPDATE new_table SET names = ? WHERE id = ?;";
  girls.forEach((girl) => {
    ID = girls.indexOf(girl) + 13;
    console.log("ID " + ID + "  " + "girl " + girl);
    config.query(query, [girl, ID], function (err, rows, fields) {
      console.log({ err, rows, fields });
    });
  });
  boys.forEach((boy) => {
    ID = boys.indexOf(boy) + 9;
    console.log("ID " + ID + "  " + "boy " + boy);
    config.query(query, [boy, ID], function (err, rows, fields) {
      console.log({ err, rows, fields });
    });
  });

  res.send({ success: true });
}

async function submit_candi_green(req, res) {
  console.log(req.body);
  const { G1, G2, G3, G4, B1, B2, B3, B4 } = req.body;
  let girls = [G1, G2, G3, G4];
  let boys = [B1, B2, B3, B4];
  let house = "green";

  let query =
    // "INSERT INTO new_table (house,gender_id,names) VALUES (?,?,?)";
    "UPDATE new_table SET names = ? WHERE id = ?;";
  girls.forEach((girl) => {
    ID = girls.indexOf(girl) + 29;
    console.log("ID " + ID + "  " + "girl " + girl);
    config.query(query, [girl, ID], function (err, rows, fields) {
      console.log({ err, rows, fields });
    });
  });
  boys.forEach((boy) => {
    ID = boys.indexOf(boy) + 25;
    console.log("ID " + ID + "  " + "boy " + boy);
    config.query(query, [boy, ID], function (err, rows, fields) {
      console.log({ err, rows, fields });
    });
  });

  res.send({ success: true });
}

async function submit_candi_blue(req, res) {
  console.log(req.body);
  const { G1, G2, G3, G4, B1, B2, B3, B4 } = req.body;
  let girls = [G1, G2, G3, G4];
  let boys = [B1, B2, B3, B4];
  let house = "blue";

  let query =
    // "INSERT INTO new_table (house,gender_id,names) VALUES (?,?,?)";
    "UPDATE new_table SET names = ? WHERE id = ?;";
  girls.forEach((girl) => {
    ID = girls.indexOf(girl) + 21;
    console.log("ID " + ID + "  " + "girl " + girl);
    config.query(query, [girl, ID], function (err, rows, fields) {
      console.log({ err, rows, fields });
    });
  });
  boys.forEach((boy) => {
    ID = boys.indexOf(boy) + 17;
    console.log("ID " + ID + "  " + "boy " + boy);
    config.query(query, [boy, ID], function (err, rows, fields) {
      console.log({ err, rows, fields });
    });
  });

  res.send({ success: true });
}

module.exports = {
  submit_candi,
  submit_candi_yellow,
  submit_candi_green,
  submit_candi_blue,
};
