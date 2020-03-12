const express = require("express");
const router = express.Router();
const User = require("../model/userModel");
const jwt = require("jsonwebtoken");
const key = require("../keys");
const bcrypt = require("bcrypt");

router.post("/", (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email }).then(user => {
    if (!user) return res.status(400).json({ msg: "User Does not exist" });
    bcrypt.compare(password, user.password, (err, succ) => {
      if (err) {
        console.log(res);
        return res
          .status(401)
          .json({ success: false, msg: "Passwords do not match" });
      }

      if (succ) {
        const payload = {
          id: user.id
        };
        const options = { expiresIn: 3600 };
        jwt.sign(payload, key.secretOrKey, options, (err, token) => {
          if (err) {
            res.json({
              success: false,
              token: "There was an error"
            });
          } else {
            res.json({
              success: true,
              token: token
            });
          }
        });
      }
    });
  });
});

router.get("/", (req, res) => {
  userModel
    .findOne({ _id: req.user.id })
    .then(user => {
      res.json(user);
    })
    .catch(err => res.status(404).json({ error: "User does not exist!" }));
});

module.exports = router;
