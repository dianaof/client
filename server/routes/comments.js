const express = require("express");
const router = express.Router();
const commentModel = require("../model/commentModel");
const passport = require("passport");
// const key = require("../keys");

//GET id itinerary
router.get(
  "/byitinerary/:itinerary_id",
  //   passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let itineraryIdParam = req.params.itinerary_id;
    commentModel
      .find({ itinerary_id: itineraryIdParam })
      .then(comments => {
        res.json(comments);
      })
      .catch(err => console.log(err));
  }
);

//POST dependiendo si esta logeado el user
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log("GOOD", req.body);

    const newComment = new commentModel({
      username: req.body.username,
      comment: req.body.comment,
      itinerary_id: req.body.itinerary_id
    });
    newComment
      .save()
      .then(comment => {
        res.json(comment);
      })
      .catch(err => {
        res.status(500).send("Server error");
      });
  }
);

router.post("/test", (req, res) => {
  res.json({ msg: "GOOD" });
});

module.exports = router;
