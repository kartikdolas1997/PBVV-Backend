const router = require("express").Router();
const submitCandidates = require("../controllers/customize");

router.post("/red", submitCandidates.submit_candi);
router.post("/yellow", submitCandidates.submit_candi_yellow);
router.post("/green", submitCandidates.submit_candi_green);
router.post("/blue", submitCandidates.submit_candi_blue);

module.exports = router;
