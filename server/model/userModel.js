const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  img: {
    type: String
  },
  user: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("user", userSchema);
