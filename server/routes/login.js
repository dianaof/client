const express = require("express");
const router = express.Router();
const User = require("../model/userModel");
const jwt = require("jsonwebtoken");
const key = require("../keys");
const bcrypt = require("bcrypt");

router.post("/", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then(user => {
    if (!user) return res.status(400).json({ msg: "User doesn't exist" });
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
          // name: user.name
          // img: user.img
        };
        const options = { expiresIn: 2592000 };
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
    // .catch(err => console.log(err));
  });
});

router.get("/all", (req, res) => {});

module.exports = router;
