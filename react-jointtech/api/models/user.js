const mongoose = require("mongoose");

const User = mongoose.model('User', new mongoose.Schema({
  name: {
      type: String,
      required: true
  },
  email: {
      type: String,
      required: true,
      minlength: 5
  },
  password: {
      type: String,
      required: true
  }
}));


exports.User = User;