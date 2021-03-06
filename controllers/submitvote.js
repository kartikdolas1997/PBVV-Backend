const config = require("../models/config");

async function submit_vote(req, res) {
  console.log("ran till here");
  console.log(req.body);
  const { house, headboy, headgirl } = req.body;
  let query =
    "UPDATE new_table SET no_of_votes = no_of_votes + 1 WHERE house =? and gender_id = ? and names = ?;";
  let query2 =
    "UPDATE new_table SET no_of_votes = no_of_votes + 1 WHERE house =? and gender_id = ? and names = ?";
  // Query for lastvote
  // id,house,malname,femalename in table where id = 33
  // update new_table set house = 'red', gender_id = 'MALE' where id =33;
  let query3 =
    "UPDATE new_table SET house =?, gender_id=?, names=? WHERE id = 33;";
  config.query(
    query, 
    [house, "male", headboy], 
    function (err, rows, fields) {
    console.log({ err, rows, fields });
    // res.send(rows);
  });
  config.query(
    query3,
    [house, headboy, headgirl,33],
    function (err, rows, fields) {
      console.log({ err, rows, fields });
      // res.send(rows);
    });
  config.query(
    query2,
    [house, "female", headgirl],
    function (err, rows, fields) {
      console.log({ err, rows, fields });
      res.send(rows);
    }
  );
}

module.exports = { submit_vote };
