const express = require("express");
const router = express.Router();
const user = require("../model/userModel");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const { check, validationResult } = require("express-validator");
const key = require("<path to your config file>");

router.get("/all", (req, res) => {
  user
    .find({})
    .then(files => {
      res.send(files);
    })
    .catch(err => console.log(err));
});

router.post(
  "/",
  [
    check("email").isEmail(),

    check("password")
      .isLength({ min: 5 })
      .withMessage("Must have at least 5 characters")
  ],
  (req, res) => {
    console.log(req.body);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array() });
    }

    bcrypt.genSalt(saltRounds, function(err, salt) {
      bcrypt.hash(req.body.password, salt, function(err, hash) {
        // Store hash in your password DB.
        const newUser = new userModel({
          img: req.body.picture,
          user: req.body.name,
          email: req.body.email,
          password: hash
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
  }
);

router.post(
  "/login",
  [check("email").isEmail(), check("password").isLength({ min: 5 })],
  (req, res) => {
    const newLogin = new userModel({
      email: req.body.email,
      password: req.body.password
    });
    // newLogin
    //   .save()
    //   .then(login => {
    //     res.send(login);
    //   })
    //   .catch(err => {
    //     res.status(500).send("Server error");
    //   });
  }
);

module.exports = router;
