const express = require("express");
const router = express.Router();
const signupModel = require("../model/signupModel");

router.post("/", (req, res) => {
  const newSignup = new signupModel({
    email: req.body.email,
    password: req.body.password,
    img: req.body.img
  });
  newSignup
    .save()
    .then(signup => {
      res.send(signup);
    })
    .catch(err => {
      res.status(500).send("Server Error");
    });
});

module.exports = router;
