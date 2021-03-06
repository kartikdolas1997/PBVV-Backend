const config = require("../models/config");

async function function_name(req, res) {
  // const { G1, G2, G3, G4, B1, B2, B3, B4 } = req.body;
  // let girls = [G1, G2, G3, G4];
  // let boys = [B1, B2, B3, B4];
  // let house = "red";

  let { house, gender } = req.params;

  let query =
    "select names, no_of_votes from new_table where house='" +
    house +
    "' AND gender_id='" +
    gender +
    "';";

  config.query(query, function (err, rows, fields) {
    console.log({ err, rows, fields });
    console.log(rows);
    res.send(rows);
  });
}
module.exports = { function_name };
