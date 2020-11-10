const router = require("express").Router();
const submitCandidates = require("../controllers/customize");

router.post("/red", submitCandidates.submit_candi);
module.exports = router;
