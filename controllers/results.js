const config = require("../models/customize");

async function function_name(req, res) {
    console.log(req.body);
  const { G1, G2, G3, G4, B1, B2, B3, B4 } = req.body;
  let girls = [G1, G2, G3, G4];
  let boys = [B1, B2, B3, B4];
  let house = "red";

  let query =
    "UPDATE abc.new_table SET names = ? WHERE id = ?;"
  girls.forEach((girl) => {
    ID = girls.indexOf(girl)+5;
    console.log('ID '+ID+'  '+'girl '+girl);
    config.query(query, [girl,ID] , function (err, rows, fields) {
      console.log({ err, rows, fields });
    });
  });
  boys.forEach((boy) => {
    ID = boys.indexOf(boy)+1;
    console.log('ID '+ID+'  '+'boy '+boy);
    config.query(query, [boy,ID], function (err, rows, fields) {
      console.log({ err, rows, fields });
    });
  });

  res.send({success:true})
}
module.exports = { function_name };