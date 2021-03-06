const config = require("../models/config");

async function reset_count(req, res) {
  // const { G1, G2, G3, G4, B1, B2, B3, B4 } = req.body;
  // let girls = [G1, G2, G3, G4];
  // let boys = [B1, B2, B3, B4];
  // let house = "red";

  let { color, gender } = req.body;
  console.log(req.body);
//   update new_table set no_of_votes = 0 where house = 'green' and gender_id = 'male';
  let query =
    "update new_table set no_of_votes = 0 where house ='" +
    color +
    "' AND gender_id='" +
    gender +
    "';";

  config.query(query, function (err, rows, fields) {
    console.log({ err, rows, fields });
    console.log(rows);
    res.send(rows);
  });
}
module.exports = { reset_count };
