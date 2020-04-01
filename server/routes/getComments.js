const express = require("express");
const router = express.Router();
const commentModel = require("../model/commentModel");

router.get("/getByitinerary/:itinerary_id", (req, res) => {
  console.log("itineraryId", req.params.itinerary_id);
  let itineraryIdParam = req.params.itinerary_id;
  commentModel
    .find({ itinerary_id: itineraryIdParam })
    .then(comments => {
      res.json(comments);
    })
    .catch(err => console.log(err));
});

module.exports = router;
