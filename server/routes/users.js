const express = require("express");
const router = express.Router();
const userModel = require("../model/userModel");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const myPlaintextPassword = "s0//P4$$w0rD";
const someOtherPlaintextPassword = "not_bacon";

router.get("/all", (req, res) => {
  userModel
    .find({})
    .then(files => {
      res.send(files);
    })
    .catch(err => console.log(err));
});

bcrypt.genSalt(saltRounds, function(err, salt) {
  bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
    // Store hash in your password DB.
    router.post("/", (req, res) => {
      const newUser = new userModel({
        img: req.body.img,
        user: req.body.user,
        email: req.body.email,
        password: req.body.password
      });
      newUser
        .save()
        .then(user => {
          res.send(user);
        })
        .catch(err => {
          res.status(500).send("Server Error");
        });
    });
  });
});

module.exports = router;
