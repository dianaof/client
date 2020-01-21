const mongoose = require("mongoose");

const itinerarySchema = new mongoose.Schema({
  city_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  hashtag: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("itinerary", itinerarySchema);
