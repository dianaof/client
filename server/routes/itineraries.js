const express = require("express");
const router = express.Router();
const itineraryModel = require("../model/itineraryModel");

router.get("/all", (req, res) => {
  itineraryModel
    .find({})
    .then(files => {
      res.send(files);
    })
    .catch(err => console.log(err));
});

//post new itinerary
router.post("/", (req, res) => {
  const newItinerary = new itineraryModel({
    city_id: req.body.city_id,
    title: req.body.title,
    img: req.body.img,
    rating: req.body.rating,
    duration: req.body.duration,
    price: req.body.price,
    hashtag: req.body.hashtag
  });
  newItinerary
    .save()
    .then(itinerary => {
      res.send(itinerary);
    })
    .catch(err => {
      res.status(500).send("Server error");
    });
});

// find an itinerary by its Id
router.get("/find/:_id");

//this is how you implement a city route by specific city
router.get("/bycity/:city_id", (req, res) => {
  let cityIdParam = req.params.city_id;
  console.log(cityIdParam);
  itineraryModel
    .find({ city_id: cityIdParam })
    .then(itineraries => {
      res.send(itineraries);
    })
    .catch(err => console.log(err));
});

module.exports = router;
