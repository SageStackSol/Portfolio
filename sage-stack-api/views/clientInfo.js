const express = require("express");
const router = express.Router();
const postClientInfo = require("../controller/clientInfo")

router.get("/", (req, res) => {
  res.send("running");
});
router.post("/client-info", postClientInfo);

module.exports = router;
