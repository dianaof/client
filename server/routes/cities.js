const express = require("express");
const router = express.Router();

router.get("/prueba", (req, res) => {
  res.send({ msg: "Cities prueba route." });
});
router.get("/test", (req, res) => {
  res.send({ msg: "Cities test route." });
});
module.exports = router;
