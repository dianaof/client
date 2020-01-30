const express = require("express");
const router = express.Router();
const activityModel = require("../model/activityModel");
router.get("/all", (req, res) => {
  activityModel
    .find({})
    .then(files => {
      res.send(files);
    })
    .catch(err => console.log(err));
});

//post new activity
router.post("/", (req, res) => {
  const newActivity = new activityModel({
    city_id: req.body.city_id,
    itinerary_id: req.body.itinerary_id,
    img: req.body.img
  });
  newActivity
    .save()
    .then(activity => {
      res.send(activity);
    })
    .catch(err => {
      res.status(500).send("Server error");
    });
});

// find an activity by its Id
router.get("/find/:city_id");

//this is how you implement an activity route by specific itinerary
// router.get("/byitinerary/:itinerary_id", (req, res) => {
router.get("/byactivity/:city_id", (req, res) => {
  let itineraryIdParam = req.params.city_id;
  console.log(itineraryIdParam);
  activityModel
    .find({ city_id: itineraryIdParam })
    .then(activities => {
      res.send(activities);
    })
    .catch(err => console.log(err));
});
module.exports = router;
