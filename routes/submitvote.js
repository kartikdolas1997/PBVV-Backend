const router = require("express").Router();
const submitVote = require("../controllers/submitvote");

router.post("/vote", submitVote.submit_vote);

module.exports = router;
