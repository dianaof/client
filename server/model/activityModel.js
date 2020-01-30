const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  city_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  itinerary_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  img: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("activity", activitySchema);
