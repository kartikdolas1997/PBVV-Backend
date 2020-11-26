const router = require("express").Router();
const resultsCandidates = require("../controllers/reset");

router.post("/abc", resultsCandidates.reset_count); 

router.post('/', (req, res) => {
    res.send('Please read documentation for the API. (results)')
  })

module.exports = router;