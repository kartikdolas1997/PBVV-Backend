const router = require("express").Router();
const resultsCandidates = require("../controllers/results");

router.post("/red", resultsCandidates.submit_candi);
router.post("/yellow", resultsCandidates.submit_candi_yellow);
router.post("/green", resultsCandidates.submit_candi_green);
router.post("/blue", resultsCandidates.submit_candi_blue);

module.exports = router;