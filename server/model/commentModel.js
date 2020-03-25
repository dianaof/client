const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  comment: {
    type: String
  },
  itinerary_id: {
    type: mongoose.Schema.Types.ObjectId
  }
});
module.exports = mongoose.model("comment", commentSchema);
