const config = require("../models/customize");

async function submit_candi(req, res) {
    console.log(req.body);
  const { G1, G2, G3, G4, B1, B2, B3, B4 } = req.body;
  let girls = [G1, G2, G3, G4];
  let boys = [B1, B2, B3, B4];
  let house = "red";

  let query =
    "INSERT INTO abc.new_table (house,gender_id,names) VALUES (?,?,?)";
  girls.forEach((girl) => {
    config.query(query, [house, "female", girl], function (err, rows, fields) {
      console.log({ err, rows, fields });
    });
  });
  boys.forEach((boy) => {
    config.query(query, [house, "male", boy], function (err, rows, fields) {
      console.log({ err, rows, fields });
    });
  });

  res.send({success:true})
}

module.exports = { submit_candi };
