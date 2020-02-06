const express = require("express");
const router = express.Router();
const userModel = require("../model/userModel");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const { check, validationResult } = require("express-validator");

router.get("/all", (req, res) => {
  userModel
    .find({})
    .then(files => {
      res.send(files);
    })
    .catch(err => console.log(err));
});

router.post(
  "/",
  [
    // username must be an email
    check("email").isEmail(),
    // password must be at least 5 chars long
    check("password").isLength({ min: 5 })
  ],
  (req, res) => {
    console.log(req.body);
    // Finds the validation errors in this request and wraps them in an object with handy functions
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

module.exports = router;
