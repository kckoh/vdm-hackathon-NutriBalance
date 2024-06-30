const express = require("express");
const { sendMoreInfo } = require("../controllers/InfoController");

const router = express.Router();

router.route("/send").post(sendMoreInfo);

module.exports = router;
