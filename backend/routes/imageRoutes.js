const express = require("express");
const { sendImage } = require("../controllers/ImageController");

const router = express.Router();

router.route("/send").post(sendImage);

module.exports = router;
