const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  // address: {
  //   type: String,
  //   required: true,
  // },
  // phone: {
  //   type: String,
  //   required: true,
  // },
  password: {
    type: String,
    required: true,
  },
  // orders: {
  //   type: Array,
  // },
  // date: {
  //   type: Date,
  //   default: Date.now(),
  // },
});

module.exports = mongoose.model("Users", UserSchema);
