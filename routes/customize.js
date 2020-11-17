const router = require("express").Router();
const submitCandidates = require("../controllers/customize");

router.post("/red", submitCandidates.submit_candi);
router.post("/yellow", submitCandidates.submit_candi_yellow);
module.exports = router;
