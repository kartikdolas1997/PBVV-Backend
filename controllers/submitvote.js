const config = require("../models/config");

async function submit_vote(req, res) {
  console.log("ran till here");
  console.log(req.body);
  const { house, headboy, headgirl } = req.body;
  let query =
    "UPDATE abc.new_table SET no_of_votes = no_of_votes + 1 WHERE house =? and gender_id = ? and names = ? and gender_id = ? and names = ?;";
  config.query(query, [house, "male", headboy,house, "female", headgirl], function (err, rows, fields) {
    console.log({ err, rows, fields });
    res.send(rows);
  });

  
}

module.exports = { submit_vote };
