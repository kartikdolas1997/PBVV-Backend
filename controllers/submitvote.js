const config = require("../models/config");

async function submit_vote(req, res) {
    console.log(req.body);
  const { house, headboy, headgirl } = req.body;
  // let House = [G1, G2, G3, G4];
  // let boys = [B1, B2, B3, B4];
  // let house = "red";

  let query =
    // "INSERT INTO abc.new_table (house,gender_id,names) VALUES (?,?,?)";
    // "UPDATE abc.new_table SET names = ? WHERE id = ?;"
    "UPDATE abc.new_table SET no_of_votes = no_of_votes + 1 WHERE house ='red'and gender_id = 'male' and names = 'Sushant'"
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


module.exports = { submit_vote };
