const router = require("express").Router();
const resultsCandidates = require("../controllers/DeleteVote");

router.get("/:house/:gender", resultsCandidates.function_name); // this is a post method. we were trying to get it. :joy: 

router.get('/', (req, res) => {
    res.send('Please read documentation for the API. (results)')
  })

module.exports = router;