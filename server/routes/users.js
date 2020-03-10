const express = require("express");
const router = express.Router();
const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const passport = require("passport");
const saltRounds = 10;
const { check, validationResult } = require("express-validator");

router.get("/all", (req, res) => {
  User.find({})
    .then(files => {
      res.send(files);
    })
    .catch(err => console.log(err));
});

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log("GOOD");

    User.findOne({ _id: req.user.id })
      .then(user => {
        res.json(user);
      })
      .catch(err => res.status(404).json({ error: "User does not exist!" }));
  }
);

router.post(
  "/",
  [
    check("email").isEmail(),
    check("password")
      .isLength({ min: 5 })
      .withMessage("Password must have at least 5 characters")
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
        console.log(req.body.name);
        const newUser = new User({
          img: req.body.picture,
          name: req.body.name,
          email: req.body.email,
          password: hash
        });
        console.log(newUser);
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
